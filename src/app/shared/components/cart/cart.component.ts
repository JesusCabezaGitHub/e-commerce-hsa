import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '@core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  template: `
     <i class="fas fa-shopping-cart fa-1x" (click)="navTo('cart')">{{ totalItems$ | async }}</i>
  `,
  styles: ['']
})
export class CartComponent implements OnInit, OnChanges {

  totalItems$: Observable<number>;

  constructor(
    private readonly router: Router,
    private readonly cartService: CartService
  ) {
    this.totalItems$ = this.cartService.totalItems$;
  }


  ngOnInit(): void {
    this.totalItems$ = this.cartService.totalItems$;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalItems$ = this.cartService.totalItems$;
  }

  navTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }

}
