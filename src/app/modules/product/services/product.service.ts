import { Injectable } from '@angular/core';
import { Product, ProductItem } from '@core/model/product';
import { ProductApiService } from '@modules/product/services/product-api.service';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductMapper } from '@core/mapper/product.mapper';
import { ProductInCart } from '@app/core/model/product-in-cart';
import { CartService } from '@app/core/services/cart.service';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private readonly productApiService: ProductApiService, private readonly cartService: CartService) { }

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

  convertProductoToProductInCart(product: Product): ProductInCart {
    return ProductMapper.productToProductInCart(product)
  }

  convertProductoItemToProductInCart(productItem: ProductItem): ProductInCart {
    return ProductMapper.productItemToProductInCart(productItem)
  }

  addProductToCat(cartItem: ProductInCart) {
    this.cartService.addItem(cartItem)
  }

}
