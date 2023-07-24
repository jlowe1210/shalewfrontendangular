import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'photo',
  templateUrl: './Photo.component.html',
  styleUrls: ['./Photo.component.css'],
})
export class PhotoComponent {
  @Input()
  photo!: any | null;
}
