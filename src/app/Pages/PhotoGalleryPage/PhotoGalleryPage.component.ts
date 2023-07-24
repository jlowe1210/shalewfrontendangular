import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, switchMap, tap, timer } from 'rxjs';

import { PhotoService } from 'src/app/Services/Photo.service';

@Component({
  selector: 'photo-page',
  templateUrl: './PhotoGalleryPage.component.html',
  styleUrls: ['./PhotoGalleryPage.component.css'],
})
export class PhotoGalleryPageComponent implements OnInit {
  public routePath!: Observable<string>;
  public photos!: Observable<any[]>;

  public validPaths: string[] = [
    'weddings',
    'birthdays',
    'sweet16',
    'kidevents',
    'babyshowers',
  ];

  constructor(
    private readonly activedRoute: ActivatedRoute,
    private readonly photoService: PhotoService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const path = params['gallery'];
      if (this.validPaths.indexOf(path) === -1) {
        this.router.navigate(['404']);
      }
    });

    this.photos = timer(0).pipe(
      switchMap(() => {
        return this.activedRoute.params.pipe(
          tap((params) => (this.routePath = of(params['gallery']))),
          map((value) => value['gallery']),
          switchMap((value) => this.photoService.getPhotos(value))
        );
      })
    );
  }
}
