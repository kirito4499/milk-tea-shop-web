import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from 'src/app/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(
      (data) => {
        this.orders = data;
        console.log(this.orders);
      }
    )
  }
}
