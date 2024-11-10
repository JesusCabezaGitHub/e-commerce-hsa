import { Product } from './product';

export interface ProductResponse extends Product {
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}
