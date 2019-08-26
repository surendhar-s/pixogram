import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  searchUser(userId: number, value: String): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/search/newfollow/${userId}/${value}`);
  }

  // searchFollowUser(userId: number, value: String): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}/search/alreadyFollow/${userId}/${value}`);
  // }
}
