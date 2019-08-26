import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Media } from 'src/model/media';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  baseUrl: String = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File, userId, url, title, description, tags): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file, url);
    formdata.append('userId', userId);
    formdata.append('url', url);
    formdata.append('title', title);
    formdata.append('description', description);
    formdata.append('tags', tags);

    const req = new HttpRequest('POST', `${this.baseUrl}/post`, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallfiles`);
  }
}
