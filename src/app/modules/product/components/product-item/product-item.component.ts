import { Component, Input, OnInit } from '@angular/core';
import { ProductItem } from '@core/model/product';
import { ProductInCart } from '@core/model/product-in-cart';
import { ProductService } from '@modules/product/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: ProductItem;
  productInCart!: ProductInCart;

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.productInCart = this.productService.convertProductoItemToProductInCart(this.productItem);
  }
}
