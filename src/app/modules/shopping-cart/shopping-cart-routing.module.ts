import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from '@modules/shopping-cart/shopping-cart.component';
import { CartPagesComponent } from '@modules/shopping-cart/pages/cart-pages.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingCartComponent,
    children: [
      { path: "", component: CartPagesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingCartRoutingModule { }
