import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('@modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('@modules/shopping-cart/shopping-cart.module').then(
        (m) => m.ShoppingCartModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
