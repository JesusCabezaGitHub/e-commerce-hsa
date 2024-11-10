export interface Product {
  id: string;
  title: string;
  price: number;
  category: Category;
  description: string;
  image: string;
}

export type ProductItem = Pick<Product, 'id' | 'title' | 'price' | 'image'>;
export type Category = CategoryClothing | CategoryAPI | CategoryBeauty;

export type CategoryBeauty = 'Producto de Belleza' | 'Producto de Belleza';
export type CategoryClothing =
  | 'Calzado Masculino'
  | 'Ropa Femenina'
  | 'Ropa Masculina'
  | 'Calzado Femenino';

export type CategoryAPI =
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing";
