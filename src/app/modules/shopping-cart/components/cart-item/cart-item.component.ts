import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductInCart } from '@app/core/model/product-in-cart';
import { AmountChangedItem } from '@modules/shopping-cart/model/amount-change-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() cartItem!: ProductInCart;
  @Output() amountChanged: EventEmitter<AmountChangedItem> = new EventEmitter();
  @Output() removeCartItem: EventEmitter<ProductInCart> = new EventEmitter();

  private readonly OPERATION_PLUS = "plus";
  private readonly OPERATION_MINUS = "minus";
  public Math = Math;

  onAmountPlusChange() {
    this.amountChanged.emit({ operation: this.OPERATION_PLUS, item: this.cartItem });
  }

  onAmountMinusChange() {
    this.amountChanged.emit({ operation: this.OPERATION_MINUS, item: this.cartItem });
  }

  onRemoveCartItem() {
    this.removeCartItem.emit(this.cartItem);
  }

  isActive(amount: number): String {
    if (amount <= 1) {
      return 'disabled'
    }
    return ""
  }
}
