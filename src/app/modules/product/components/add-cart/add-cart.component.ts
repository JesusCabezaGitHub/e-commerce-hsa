import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductInCart } from '@app/core/model/product-in-cart';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-cart',
  template: `
    <button type="button" [class]="class" (click)="addCart()" >Agregar</button>
  `,
  styles: []
})
export class AddCartComponent implements OnInit, OnChanges {
  @Input() cartItem!: ProductInCart;
  @Input() class: string = 'light';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.class = `btn btn-${this.class}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log({ changes })
  }

  addCart() {
    this.productService.addProductToCat(this.cartItem)
  }

  removeCart() {
    this.productService.addProductToCat(this.cartItem)
  }
}
