import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CartPagesComponent } from './pages/cart-pages.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartEmptyComponent } from './components/cart-empty/cart-empty.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    CartPagesComponent,
    CartItemComponent,
    CartEmptyComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule
  ]
})
export class ShoppingCartModule { }
