import { Injectable } from '@angular/core';
import { exists } from 'node:fs';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  addToCart(cartItem: CartItem) {
    let alreadyInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length > 0) {
      for(let tempCartItem of this.cartItems) {
        if(tempCartItem.id === cartItem.id) {
          existingCartItem = tempCartItem;
          break;
        }
      }
      alreadyInCart = (existingCartItem != undefined);
    }

    if(alreadyInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(cartItem);
    }

    this.computeCartTotals();
  }

  computeCartTotals() {
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems) {
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalQuantity.next(totalQuantityValue);
  }

}
