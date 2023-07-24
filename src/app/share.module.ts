import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './Components/UI-Banner/Banner.component';
import { ContainerComponent } from './Components/Container/Container.component';
import { FooterComponent } from './Components/UI-Footer/Footer.component';

@NgModule({
  declarations: [BannerComponent, ContainerComponent, FooterComponent],
  imports: [CommonModule],
  providers: [],
  exports: [BannerComponent, ContainerComponent, CommonModule, FooterComponent],
})
export class ShareModule {}
