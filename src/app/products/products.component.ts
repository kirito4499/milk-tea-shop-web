import { Component, OnInit } from '@angular/core';
import { ProductService, CategoryService, Category, Product, Order, AuthService } from '../core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories: Category[];
  products: Product[];
  allProduct: Product[];
  order: Order;
  selectedProduct: Product;

  constructor(private productService: ProductService, private categoryService: CategoryService, private authService: AuthService) { }

  ngOnInit() {
    this.getAllCategory();
    this.getAllProduct();
    
    this.authService.loadUserPayload();    
    this.order = {
      userId: this.authService.currentUser['id'],
      totalPrice: 0,
      products: []
    }
  }

  getAllProduct() {
    this.productService.getAllProducts().subscribe(
      (data) => { 
        this.products = data;
        this.allProduct = this.products;
      }
    )
  }

  getAllCategory() {
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }

  filterProductByCategory(categoryId) {
    if (categoryId === 'all') {
      this.products = this.allProduct;
    } else {
      this.products = this.allProduct.filter(product => product['categoryId'] === categoryId)
    }
  }

  addProductToCart(product) {    
    if (this.order.products.some(p => p['_id'] === product['_id'])) {
      this.order.products.forEach(p => {
        if (p['_id'] === product['_id'])
          p['quantity'] += 1;
      }) 
    } else {
      product['quantity'] = 1;
      this.order.products.push(product);
    }
    this.order.totalPrice += product.price;
  }
}
