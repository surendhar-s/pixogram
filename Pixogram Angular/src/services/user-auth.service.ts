import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  baseUrl = 'http://localhost:8080';
  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users`);
  }

  registerUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/create`, user);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/user/${userId}`);
  }

  checkUser(username: String): Observable<Boolean>{
    return this.http.get<Boolean>(`${this.baseUrl}/user/check/${username}`);
  }

  checkLogin(username:String , password:String): Observable<any>{
      
    return this.http.post(`${this.baseUrl}/user/${username}/${password}`,{responseType: 'text'});
  }

}
