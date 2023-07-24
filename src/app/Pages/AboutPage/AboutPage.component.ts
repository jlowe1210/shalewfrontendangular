import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PhotoService } from 'src/app/Services/Photo.service';

@Component({
  selector: 'about-page',
  templateUrl: './AboutPage.component.html',
  styleUrls: ['./AboutPage.component.css'],
})
export class AboutPageComponent implements OnInit {
  constructor(private PhotoService: PhotoService) {}

  ngOnInit(): void {
    this.PhotoService.getPhotos('weddings').subscribe((value) => {
      console.log(value);
    });
  }
}
