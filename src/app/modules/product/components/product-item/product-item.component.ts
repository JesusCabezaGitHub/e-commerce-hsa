import { Component, Input } from '@angular/core';
import { ProductItem } from '@core/model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() productItem!: ProductItem;
}
