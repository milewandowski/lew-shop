import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/common/order-details';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orderDetails: OrderDetails;
  searchFlag: boolean;

  constructor(private orderService: OrderService,
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.searchFlag = false;
  }

  findOrderByTrackingNumber(orderTrackingNumber: string) {
    this.orderDetails = null;
    this.searchFlag = true;
    this.orderService.getOrderByTrackingNumber(orderTrackingNumber).subscribe(
      data => {
        this.orderDetails = data;
      }
    );
  }

  cancelOrder(id: number, orderTrackingNumber: string) {
    this.orderService.cancelOrder(id).subscribe(
      response => {
        this.cartService.orderTrackingNumber = orderTrackingNumber;
        this.router.navigateByUrl("/order-canceled");
      },
      err => {
        alert(`Error occured. Your order has not been canceled.`);
      }
    );
  }

}
