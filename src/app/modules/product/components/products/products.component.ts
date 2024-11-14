import { Component, OnInit } from '@angular/core';
import { ProductItem } from '@core/model/product';
import { ProductService } from '@modules/product/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productItems: ProductItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((productItems) => {
      this.productItems = productItems;
    });
  }
}
