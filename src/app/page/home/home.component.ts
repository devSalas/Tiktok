import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { tap } from 'rxjs/operators';
import { Video } from 'src/app/intefaces/video';
import { VideosService } from './services/videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos!:Video[]

  constructor(private videoSvc: VideosService){}

  ngOnInit() {
    this.videoSvc.getVideos()
    .pipe(
      
      tap(res=> this.videos=res)
    )
    .subscribe()
  }
  
  
slides = [
  {img:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809494/dev/Rueda_Fortuna_y4rclm.mp4"},
  {img:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Rana_hoof1v.mp4"},
  {img:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Peces_epci34.mp4"},
  {img:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Pescado_hqws7p.mp4"}
];



}