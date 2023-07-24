import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';

enum MessageStatus {
  neutral,
  submitting,
  success,
  failed,
}

function validPhoneNumber(
  c: AbstractControl | string
): { invalidPhone: boolean } | null {
  let cleanedPhoneNumber;

  if (c instanceof AbstractControl) {
    cleanedPhoneNumber = c.value.replace(/\D/g, '');
  } else {
    cleanedPhoneNumber = c.replace(/\D/g, '');
  }
  const isValid = /^1?\d{10}$/.test(cleanedPhoneNumber);
  if (!isValid) {
    return { invalidPhone: !isValid };
  }
  return null;
}

@Component({
  selector: 'contact-form',
  templateUrl: './ContactForm.component.html',
  styleUrls: ['./ContactForm.component.css'],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  public messageStatus: MessageStatus = MessageStatus.neutral;

  public contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    address: '',
    email: ['', Validators.compose([Validators.required, Validators.email])],
    phone: [''],
    contact_method: '',
    date_time: '',
    subject: '',
    message: '',
  });
  private destorySubject$: Subject<any> = new Subject();

  constructor(
    private readonly fb: FormBuilder,
    private readonly http: HttpClient
  ) {}

  get disablePastDates(): string {
    return new Date().toISOString().substring(0, 16);
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get date_time() {
    return this.contactForm.get('date_time');
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get contact_method() {
    return <FormControl>this.contactForm.get('contact_method');
  }

  ngOnInit(): void {
    this.contactForm.valueChanges
      .pipe(takeUntil(this.destorySubject$))
      .subscribe(() => {
        if (this.messageStatus !== MessageStatus.neutral) {
          this.messageStatus = MessageStatus.neutral;
        }
        return;
      });

    this.phone?.valueChanges
      .pipe(takeUntil(this.destorySubject$))
      .subscribe((value) => {
        this.formattPhoneNumber(value);
      });

    this.contact_method.valueChanges
      .pipe(takeUntil(this.destorySubject$))
      .subscribe((value) => {
        if (value === 'Call' || value === 'Text') {
          this.phone?.addValidators([validPhoneNumber, Validators.required]);
          this.date_time?.addValidators(Validators.required);
          this.phone?.updateValueAndValidity();
          this.date_time?.updateValueAndValidity();
        } else {
          this.phone?.removeValidators([validPhoneNumber, Validators.required]);
          this.date_time?.removeValidators(Validators.required);
          this.phone?.updateValueAndValidity();
          this.date_time?.updateValueAndValidity();
        }
      });
  }

  ngOnDestroy(): void {
    this.destorySubject$.next('');
  }

  handleSubmit() {
    this.messageStatus = MessageStatus.submitting;
    this.http
      .post('/api/message', this.contactForm.value)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.messageStatus = MessageStatus.failed;

          if (err.status === 400) {
            let parsedErrors = JSON.parse(err.error);

            for (let key in parsedErrors) {
              this.contactForm.get(key)?.markAsDirty();
              this.contactForm
                .get(key)
                ?.setErrors({ message: parsedErrors[key]?.message });
            }
          }

          return EMPTY;
        })
      )
      .subscribe((reponse) => {
        this.messageStatus = MessageStatus.success;
        this.contactForm.reset(
          { contact_method: '', phone: '' },
          { emitEvent: false }
        );
      });
  }

  public getMessageEmun() {
    return MessageStatus;
  }

  private formattPhoneNumber(value: any): void {
    let pastValueWithOutLetter = value.replace(/\D/g, '');

    if (isNaN(value)) {
      this.phone?.setValue(pastValueWithOutLetter);
      return;
    }

    let phoneNumber = value;

    if (phoneNumber.length >= 10)
      // Remove all non-digit characters from the phone number
      phoneNumber = phoneNumber.replace(/\D/g, '');

    // Check if the cleaned phone number is a valid US phone number
    const isValid = /^1?\d{10}$/.test(phoneNumber);

    if (isValid) {
      // If the phone number is valid, format it to US standard format
      const formatted = phoneNumber.replace(
        /(\d{3})(\d{3})(\d{4})/,
        '($1) $2-$3'
      );

      this.contactForm.get('phone')?.setValue(formatted, { emitEvent: false });
      return;
    } else {
      // If the phone number is not valid, splice the remaining digits if it exceeds 10
      if (phoneNumber.length >= 10) {
        phoneNumber = phoneNumber.slice(0, 10);
        const formatted = phoneNumber.replace(
          /(\d{3})(\d{3})(\d{4})/,
          '($1) $2-$3'
        );
        this.contactForm
          .get('phone')
          ?.setValue(formatted, { emitEvent: false });
        return;
      }
    }
    this.contactForm.get('phone')?.setValue(phoneNumber, { emitEvent: false });
    return;
  }
}
