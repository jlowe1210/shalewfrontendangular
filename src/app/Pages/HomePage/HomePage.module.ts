import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './HomePage.component';
import { VideoBackgroundComponent } from '../../Components/Home-VideoBackground/VideoBackground.component';
import { ShareModule } from 'src/app/share.module';
import { ServiceSectionComponent } from 'src/app/Components/Home-ServiceSection/ServiceSection.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent,
    VideoBackgroundComponent,
    ServiceSectionComponent,
  ],
  providers: [],
  imports: [CommonModule, ShareModule, RouterModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
