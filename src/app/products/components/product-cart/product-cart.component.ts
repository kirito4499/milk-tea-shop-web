import { Component, OnInit, Input } from '@angular/core';
import { OrderService, Order } from 'src/app/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  @Input() order: Order;
  showAlert = false;
  alertMessage = '';

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  clearOrder() {
    this.order.products = [];
    this.order.totalPrice = 0;
  }

  createOrder() {
    this.orderService.createNewOrder(this.order).subscribe(
      (data) => {
        console.log(data);
        this.clearOrder();
        this.showAlert = true;
        this.alertMessage = data.msg;

      },
      (err) => console.log(err)
    )
  }

  closeAlert() {
    this.showAlert = false;
  }
}
