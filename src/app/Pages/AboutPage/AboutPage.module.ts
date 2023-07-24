import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutMeComponent } from 'src/app/Components/About-AboutMe/AboutMe.component';
import { TestimonialsComponent } from 'src/app/Components/About-Testimonials/testimonials.component';
import { ShareModule } from 'src/app/share.module';
import { AboutPageComponent } from './AboutPage.component';

@NgModule({
  declarations: [AboutPageComponent, AboutMeComponent, TestimonialsComponent],
  imports: [ShareModule, CommonModule],
  providers: [],
  exports: [AboutMeComponent],
})
export class AboutPageModule {}
