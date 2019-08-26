import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Media } from 'src/model/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getMedias(userId: number): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.baseUrl}/media/${userId}`);
  }

  getMediasOfFollowing(userId: number): Observable<Media[]>{
    return this.http.get<Media[]>(`${this.baseUrl}/media/fetchUserPost/${userId}`);
  }

}
