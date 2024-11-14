import { ProductInCart } from "@app/core/model/product-in-cart";

export interface AmountChangedItem {
  operation: Operation;
  item: ProductInCart
}

export type Operation = 'plus' | 'minus'
