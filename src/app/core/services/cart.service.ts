import { Injectable } from '@angular/core';
import { ProductInCart } from '@app/core/model/product-in-cart';
import { LocalStoreService } from '@core/services/local-store.service';
import { BehaviorSubject, map, reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly CART_KEY = 'cartItems';
  private readonly TOKEN_NUMBER = 1;
  private readonly cartItemsSubject = new BehaviorSubject<ProductInCart[]>(this.loadCart());

  cartItems$ = this.cartItemsSubject.asObservable();
  totalItems$ = this.cartItems$.pipe(map(items => items.reduce((total, item) => total + item.amount, 0)))

  constructor(private readonly localStorageService: LocalStoreService) { }

  private loadCart(): ProductInCart[] {
    const items = this.localStorageService.getItems<ProductInCart>(this.CART_KEY);
    return items
  }

  private saveCart(items: ProductInCart[]): void {
    this.localStorageService.addItem(this.CART_KEY, items);
    this.cartItemsSubject.next(items);
  }

  addItem(product: ProductInCart): void {
    const items = this.addItemToCart(product);
    this.clearCart()
    this.saveCart(items);
  }

  private addItemToCart(product: ProductInCart) {
    const { index, items } = this.searchProductByItem(product);
    if (index > -1) {
      items[index].amount += this.TOKEN_NUMBER;
    } else {
      items.push({ ...product });
    }
    return items;
  }

  private searchProductByItem(product: ProductInCart) {
    const items = this.cartItemsSubject.getValue();
    const index = items.findIndex(item => item.id === product.id);
    return { index, items };
  }

  changedAmountItem(product: ProductInCart): void {
    const items = this.minusItemToCart(product);
    this.clearCart()
    this.saveCart(items);
  }

  private minusItemToCart(product: ProductInCart) {
    const { index, items } = this.searchProductByItem(product);
    if (index > -1) {
      items[index].amount > 1 ? items[index].amount -= this.TOKEN_NUMBER : this.removeItem(items[index].id);
    }
    return items;
  }

  removeItem(productId: string): void {
    const items = this.cartItemsSubject.getValue().filter(item => item.id !== productId);
    this.saveCart(items);
  }

  clearCart(): void {
    this.saveCart([]);
  }

  getTotalPrice(): number {
    return this.cartItemsSubject.getValue()
      .reduce((total, item) => total + item.price * item.amount, 0);
  }
}
