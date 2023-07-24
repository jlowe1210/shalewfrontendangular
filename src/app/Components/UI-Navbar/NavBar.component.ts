import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router, Event, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['NavBar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private readonly router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  private mobileNavToggle: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public mobileNavToggle$: Observable<boolean> = this.mobileNavToggle.pipe(
    tap((toggleValue) => {
      if (toggleValue) {
        this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
      } else {
        this.renderer.setStyle(this.document.body, 'overflow', 'scroll');
      }
    })
  );

  public setMobileToggle(toggle: boolean): void {
    this.mobileNavToggle.next(toggle);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.mobileNavToggle.next(false);
      }
    });
  }
}
