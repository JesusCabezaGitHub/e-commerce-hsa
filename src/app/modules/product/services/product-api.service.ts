import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ProductResponse } from '../model/product-response';
import { HttpService } from '@core/services/http.service';
@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private readonly APIUrl: string;

  constructor(private readonly http: HttpService) {
    this.APIUrl = 'https://fakestoreapi.com';
  }

  public getProducts(): Observable<ProductResponse[]> {
    return this.http.doGet<ProductResponse[]>(`${this.APIUrl}/products`);
  }

  public getProductsByID(id: string): Observable<ProductResponse> {
    return this.http.doGet<ProductResponse>(`${this.APIUrl}/products/${id}`);
  }
}
