import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() addEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  addProductToCart() {    
    this.addEvent.emit(this.product);
  }
}
