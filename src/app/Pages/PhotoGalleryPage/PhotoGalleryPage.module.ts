import { Inject, NgModule } from '@angular/core';
import { PhotoComponent } from 'src/app/Components/Photo-Photo/Photo.component';
import { PhotoContainerComponent } from 'src/app/Components/Photo-PhotosContainer/PhotosContainer.component';
import { ShareModule } from 'src/app/share.module';
import { PhotoGalleryPageComponent } from './PhotoGalleryPage.component';

@NgModule({
  declarations: [
    PhotoGalleryPageComponent,
    PhotoContainerComponent,
    PhotoComponent,
  ],
  imports: [ShareModule],
  providers: [],
  exports: [PhotoGalleryPageComponent],
})
export class PhotoGalleryPageModule {}
