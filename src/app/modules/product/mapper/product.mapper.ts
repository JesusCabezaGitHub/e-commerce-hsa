import { Product, ProductItem } from '@core/model/product';
import { ProductResponse } from '@modules/product/model/product-response';

export class ProductMapper {
  static toProductItem(productResponse: ProductResponse): ProductItem {
    return {
      id: productResponse.id,
      title: productResponse.title,
      price: productResponse.price,
      image: productResponse.image,
    };
  }

  static toProductDetail(productResponse: ProductResponse): Product {
    return {
      id: productResponse.id,
      title: productResponse.title,
      price: productResponse.price,
      image: productResponse.image,
      category: productResponse.category,
      description: productResponse.description,
    };
  }
}
