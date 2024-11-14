import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from '@modules/product/product-routing.module';
import { ProductsComponent } from '@modules/product/components/products/products.component';
import { ProductPagesComponent } from '@modules/product/pages/product-pages.component';
import { ProductComponent } from '@modules/product/components/product/product.component';
import { ProductItemComponent } from '@modules/product/components/product-item/product-item.component';
import { AddCartComponent } from '@modules/product/components/add-cart/add-cart.component';

@NgModule({
  declarations: [
    ProductPagesComponent,
    ProductsComponent,
    ProductComponent,
    ProductItemComponent,
    AddCartComponent
  ],
  imports: [CommonModule, ProductRoutingModule],
})
export class ProductModule { }
