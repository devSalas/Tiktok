import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { VideosComponent } from './page/videos/videos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'videos',component:VideosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
