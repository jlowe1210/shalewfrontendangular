import { Component } from '@angular/core';
import { EventLink } from 'src/app/Models/EventsLinks.model';

@Component({
  selector: 'home-services',
  templateUrl: './ServiceSection.component.html',
  styleUrls: ['./ServiceSection.component.css'],
})
export class ServiceSectionComponent {
  public eventsLinks: EventLink[] = [
    {
      header: 'Weddings',
      path: '/weddings',
      src: 'https://static.wixstatic.com/media/6c0ded_e83ef7cd41f444d789a7cae09a099f2b~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3918.jpg',
      alt: 'wedding photo',
    },
    {
      header: 'Birthdays',
      path: '/birthdays',
      src: 'https://static.wixstatic.com/media/6c0ded_1a558cdaa0bd4171a6ab58c5184dc7fa~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3917.jpg',
      alt: 'birthday photo',
    },
    {
      header: 'Kids events',
      path: '/kidevents',
      src: 'https://static.wixstatic.com/media/6c0ded_89ea4d862d7c4f0b8754490d0f9da686~mv2.jpg/v1/crop/x_0,y_313,w_1074,h_977/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_4095_JPG.jpg',
      alt: 'photo of noah',
    },
    {
      header: 'Baby showers',
      path: '/babyshowers',
      src: 'https://static.wixstatic.com/media/6c0ded_7db76a35fa5242d6bcd9f51d6558f9a7~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_3920.jpg',
      alt: 'photo of baby shower',
    },
    {
      header: 'Sweet 16',
      path: '/sweet16',
      src: 'https://i.ibb.co/DbfRfr3/301036989-1674668249599938-225344964449317354-n.jpg',
      alt: 'photo of sweet sixteen',
    },
  ];
}
