import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Media } from 'src/model/media';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private mediaDetailsSource = new BehaviorSubject<Media>(new Media());
  mediaDetails$ = this.mediaDetailsSource.asObservable();
  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  sendMediaDetails(m: Media) {
    this.mediaDetailsSource.next(m);
  }
}
