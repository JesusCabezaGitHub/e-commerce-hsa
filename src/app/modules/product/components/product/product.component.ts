import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '@modules/product/services/product.service';
import { Product } from '@core/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product = {} as Product;
  }

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId) {
      this.loadProduct(productId);
    }
  }

  loadProduct(id: string): void {
    this.productService.getProductsByID(id).subscribe((product) => {
      this.product = product;
    });
  }
}
