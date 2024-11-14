import { ProductItem } from "@core/model/product";

export interface ProductInCart extends ProductItem {
  amount: number;
}
