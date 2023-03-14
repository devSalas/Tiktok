import { Component, Input } from '@angular/core';
import { Video } from 'src/app/intefaces/video';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input() video!:Video;

}

