import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetails } from '../common/order-details';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080/api/order';

  constructor(private httpClient: HttpClient) { }

  getOrderByTrackingNumber(orderTrackingNumber: string): Observable<OrderDetails> {
    const orderUrl = `${this.baseUrl}/search/findByOrderTrackingNumber?orderTrackingNumber=${orderTrackingNumber}`;

    return this.httpClient.get<OrderDetails>(orderUrl);
  }

  cancelOrder(id: number): Observable<Object> {
    const orderDelUrl = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(orderDelUrl);
  }

}
