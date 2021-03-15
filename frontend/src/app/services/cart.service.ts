import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(cartItem: CartItem) {
    let alreadyInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if(this.cartItems.length > 0) {
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === cartItem.id);
      alreadyInCart = (existingCartItem != undefined);
    }

    if(alreadyInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(cartItem);
    }

    this.computeCartTotals();
  }

  decrementQuantity(cartItem: CartItem) {
    if(cartItem.quantity > 1) {
      cartItem.quantity--;
    }
    this.computeCartTotals();
  }

  removeFromCart(cartItem: CartItem) {
    const cartItemIndex: number = this.cartItems.findIndex(item => item.id === cartItem.id);

    if(cartItemIndex != -1) {
      this.cartItems.splice(cartItemIndex, 1);
      this.computeCartTotals();
    }
  }

  computeCartTotals() {
    let totalQuantityValue: number = 0;
    let totalPriceValue: number = 0;

    for(let currentCartItem of this.cartItems) {
      totalQuantityValue += currentCartItem.quantity;
      totalPriceValue += (currentCartItem.quantity * currentCartItem.unitPrice);
    }

    this.totalQuantity.next(totalQuantityValue);
    this.totalPrice.next(totalPriceValue);
  }

}
