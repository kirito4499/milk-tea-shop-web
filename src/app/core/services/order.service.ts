import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Order } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private apiService: ApiService) { }

  getAllOrders(): Observable<Order[]> {
    return this.apiService.get('/order');
  }

  getOrdersLength(): Observable<Number> {
    return this.apiService.get('/order/ordersLength');
  }

  createNewOrder(order): Observable<any> {
    return this.apiService.post('/order/create', order);
  }

  checkIfUserHasOrder(userId): Observable<any> {
    return this.apiService.get(`/order/getLatestOrderByUserId/${userId}`);
  }
}
