import { Product, ProductItem } from '@core/model/product';
import { ProductResponse } from '@modules/product/model/product-response';
import { ProductInCart } from '@core/model/product-in-cart';

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

  static productToProductInCart(product: Product): ProductInCart {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      amount: 1
    };
  }

  static productItemToProductInCart(productItem: ProductItem): ProductInCart {
    return {
      id: productItem.id,
      title: productItem.title,
      price: productItem.price,
      image: productItem.image,
      amount: 1
    };
  }
}
