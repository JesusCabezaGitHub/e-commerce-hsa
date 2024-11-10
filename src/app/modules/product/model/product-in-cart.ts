import { ProductItem } from './product';

export interface ProductInCart extends ProductItem {
  amount: number;
}
