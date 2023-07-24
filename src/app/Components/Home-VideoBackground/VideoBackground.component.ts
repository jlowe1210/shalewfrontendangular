import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'video-background',
  templateUrl: './VideoBackground.component.html',
  styleUrls: ['./VideoBackground.component.css'],
})
export class VideoBackgroundComponent implements AfterViewInit {
  @ViewChild('video', { static: true })
  videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    this.videoElement.nativeElement.muted = true;
    this.videoElement.nativeElement.play();
  }
}
