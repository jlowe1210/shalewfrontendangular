import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';
import { PhotoService } from './Services/Photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    forkJoin([
      this.photoService.getPhotos('sweet16'),
      this.photoService.getPhotos('weddings'),
      this.photoService.getPhotos('babyshowers'),
      this.photoService.getPhotos('birthdays'),
      this.photoService.getPhotos('kidevents'),
    ]).subscribe();
  }
  title = 'shalew-angular';
}
