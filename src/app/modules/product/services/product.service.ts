import { Injectable } from '@angular/core';
import { Product, ProductItem } from '../model/product';
import { ProductApiService } from './product-api.service';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductResponse } from '../model/product-response';
import { ProductMapper } from '../mapper/product.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private productApiService: ProductApiService) {}

  public getProducts(): Observable<ProductItem[]> {
    return this.productApiService.getProducts().pipe(
      map((responses) => responses.map(ProductMapper.toProductItem)),
      catchError((error) => {
        console.error('Error fetching products:', error);
        return of([]);
      })
    );
  }

  public getProductsByID(id: string): Observable<Product> {
    return this.productApiService.getProductsByID(id).pipe(
      map(ProductMapper.toProductDetail),
      catchError((error) => {
        console.error(`Error fetching product by ID (${id}):`, error);
        return of(null as any);
      })
    );
  }
}
