import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../../intefaces/video';
@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private apiURL="http://localhost:3000/video";

  constructor(private http:HttpClient) { }
  
  getVideos():Observable<Video[]>{

    return this.http.get<Video[]>(this.apiURL);
    
  }


}
