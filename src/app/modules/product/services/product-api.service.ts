import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { ProductResponse } from '../model/product-response';
import { map, Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  private APIUrl: string;

  constructor(private http: HttpService) {
    this.APIUrl = 'https://fakestoreapi.com';
  }

  public getProducts(): Observable<ProductResponse[]> {
    return this.http.doGet<ProductResponse[]>(`${this.APIUrl}/products`);
  }

  public getProductsByID(id: string): Observable<ProductResponse> {
    return this.http.doGet<ProductResponse>(`${this.APIUrl}/products/${id}`);
  }
}
