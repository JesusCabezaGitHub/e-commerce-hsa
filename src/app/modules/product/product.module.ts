import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { ProductPagesComponent } from './pages/product-pages.component';
import { ProductComponent } from './components/product/product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    ProductPagesComponent,
    ProductsComponent,
    ProductComponent,
    ProductItemComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule {}
