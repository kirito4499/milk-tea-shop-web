import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) { }

  getAllProducts(): Observable<Product[]>{
    return this.apiService.get(`/product`);
  }

  getProductsByCategoryId(categoryId): Observable<Product[]>{
    return this.apiService.get(`/product/productsByCategory/${categoryId}`);
  }

  searchProducts(name): Observable<any>{
    return this.apiService.get(`/product/search?name=${name}`)
  }

  editProduct(productId, editedProduct): Observable<Product>{
    return this.apiService.put(`/product/edit/${productId}`, editedProduct);
  }

  createNewProduct(newProduct): Observable<Product>{
    return this.apiService.post(`/product/create`, newProduct);
  }

  deleteProduct(productId): Observable<any>{
    return this.apiService.delete(`/product/delete/${productId}`);
  }

  getCheapProductsLength(): Observable<Number>{
    return this.apiService.get(`/product/getCheapProducts`);
  }

}
