import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Block } from 'src/model/block';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  blockUser(block: Block): Observable<Object> {
    return this.http.post(`${this.baseUrl}/block`, block);
  }

  unblockUser(userId: number, blockedId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/unblock/${userId}/${blockedId}`, { responseType: 'text' });
  }

  getAllBlockedUsers(userId: number): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/blocked/${userId}`);
  }
}
