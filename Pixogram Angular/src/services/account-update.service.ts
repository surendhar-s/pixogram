import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class AccountUpdateService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  accountUpdate(user: User): Observable<any>{
    return this.http.post(`${this.baseUrl}/user/update`, user);
  }
}
