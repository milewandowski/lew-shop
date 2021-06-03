import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {

  orderTrackingNumber: string = "";

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.orderTrackingNumber = this.cartService.orderTrackingNumber;
  }

}
