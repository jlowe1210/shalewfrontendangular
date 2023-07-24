import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoService } from 'src/app/Services/Photo.service';

@Component({
  selector: 'photo-container',
  templateUrl: './PhotosContainer.component.html',
  styleUrls: ['./PhotosContainer.component.css'],
})
export class PhotoContainerComponent implements OnInit {
  @Input() photos!: any[] | null;
  public photosError!: Observable<boolean>;

  constructor(private PhotoService: PhotoService) {}

  ngOnInit(): void {
    this.photosError = this.PhotoService.getPhotoErrorObservable();
  }
}
