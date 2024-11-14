import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { CartComponent } from '@shared/components/cart/cart.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CartComponent],
  exports: [HeaderComponent, FooterComponent, CartComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule { }
