import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Cart, Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentCart: Cart;

  constructor(private apiService: ApiService) { }

  createNewCart(userId): Observable<Cart>{
    return this.apiService.post(`/cart/createCart`, userId)
  }

  getUserCartStatus(userId): Observable<any>{
    return this.apiService.get(`/cart/getUserCartStatus/${userId}`)
  }

  updateCartStatus(cartId, cartStatus): Observable<Cart>{
    return this.apiService.put(`/cart/updateCartStatus/${cartId}`, cartStatus)
  }

  addProductToCart(cartId, product): Observable<Product>{
    return this.apiService.put(`/cart/addProductToCart/${cartId}`, product)
  }

  deleteProductFromCart(cartId, productId): Observable<any>{
    return this.apiService.put(`/cart/deleteProductFromCart/${cartId}`, productId)
  }

  deleteAllProductsFromCart(cartId): Observable<Cart>{
    return this.apiService.put(`/cart/deleteAllProducts/${cartId}`)
  }

  setCartTotalPrice(cartId, totalCartPrice): Observable<Cart>{
    return this.apiService.put(`/cart/setCartTotalPrice/${cartId}`, totalCartPrice)
  }
}
