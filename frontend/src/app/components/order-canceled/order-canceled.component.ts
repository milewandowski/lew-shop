import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-canceled',
  templateUrl: './order-canceled.component.html',
  styleUrls: ['./order-canceled.component.css']
})
export class OrderCanceledComponent implements OnInit {

  orderTrackingNumber: string = "";

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.orderTrackingNumber = this.cartService.orderTrackingNumber;
  }
}
