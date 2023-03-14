import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videos = [
    {url:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Pescado_hqws7p.mp4",description:"hola rem nesciunt deleniti, atque minima placeat possimus impedit explicabo illum, adipisci quo maxime vitae eveniet?"},
    {url:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809494/dev/Rueda_Fortuna_y4rclm.mp4",description:"epppe rem nesciunt deleniti, atque minima placeat possimus impedit explicabo illum, adipisci quo maxime vitae eveniet?"},
    {url:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Rana_hoof1v.mp4",description:"calos rem nesciunt deleniti, atque minima placeat possimus impedit explicabo illum, adipisci quo maxime vitae eveniet?"},
    {url:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Peces_epci34.mp4",description:"accusamus rem nesciunt deleniti, atque minima placeat possimus impedit explicabo illum, adipisci quo maxime vitae eveniet?"},
  ]

  ngOnInit() {

  }
  
  
slides = [
  {img:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809494/dev/Rueda_Fortuna_y4rclm.mp4"},
  {img:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Rana_hoof1v.mp4"},
  {img:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Peces_epci34.mp4"},
  {img:"https://res.cloudinary.com/dzlog8uxo/video/upload/v1668809492/dev/Pescado_hqws7p.mp4"}
];



}