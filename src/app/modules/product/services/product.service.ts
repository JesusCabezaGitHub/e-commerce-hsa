import { Injectable } from '@angular/core';
import { Product, ProductItem } from '@core/model/product';
import { ProductApiService } from '@modules/product/services/product-api.service';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductMapper } from '@modules/product/mapper/product.mapper';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly productApiService: ProductApiService) { }

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
