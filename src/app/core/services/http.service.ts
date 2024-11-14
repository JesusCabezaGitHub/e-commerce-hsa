import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(protected http: HttpClient) {}

  public doGet<T>(serviceUrl: string): Observable<T> {
    return this.http.get<T>(serviceUrl);
  }
}
