import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'banner',
  templateUrl: './Banner.component.html',
  styleUrls: ['./Banner.component.css'],
})
export class BannerComponent {
  @Input() page!: string | Observable<string> | null;
}
