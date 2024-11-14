import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@modules/product/services/product.service';
import { Product } from '@core/model/product';
import { ProductInCart } from '@app/core/model/product-in-cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product: Product | undefined;
  productInCart!: ProductInCart;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.loadProduct(productId);
    }
  }

  loadProduct(id: string): void {
    this.productService.getProductsByID(id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (err) => {
        console.log('Error')
      },
      complete: () => {
        if (this.product) {
          this.productInCart = this.productService.convertProductoToProductInCart(this.product);
        }
      }
    });
  }
}
