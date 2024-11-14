import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPagesComponent } from './cart-pages.component';

describe('CartPagesComponent', () => {
  let component: CartPagesComponent;
  let fixture: ComponentFixture<CartPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
