import { Component } from '@angular/core';
import { ProductInCart } from '@app/core/model/product-in-cart';
import { CartService } from '@app/core/services/cart.service';
import { AmountChangedItem } from '@modules/shopping-cart/model/amount-change-item.model';

@Component({
  selector: 'app-cart-pages',
  templateUrl: './cart-pages.component.html',
  styleUrls: ['./cart-pages.component.scss']
})
export class CartPagesComponent {

  public listCart: ProductInCart[] = [];
  public totalPrice = 0;
  private readonly TOKEN_PLUS = "plus";

  constructor(
    private readonly cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getItems();
    this.getTotalPrice();
  }

  private getItems() {
    this.cartService.cartItems$.subscribe((cartItems) => {
      this.listCart = cartItems;
    });
  }

  private getTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice()
  }

  public onClearProducts(): void {
    this.listCart = [];
    this.cartService.clearCart();

  }

  onRemoveCartItem(item: ProductInCart) {
    this.cartService.removeItem(item.id)
    this.getTotalPrice();
  }

  amountChanged(changed: AmountChangedItem) {
    changed.operation === this.TOKEN_PLUS ? this.cartService.addItem(changed.item) : this.cartService.changedAmountItem(changed.item)
    this.getTotalPrice();
  }
}
