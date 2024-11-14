import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPagesComponent } from './pages/product-pages.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPagesComponent,
  },
  { path: ':id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
