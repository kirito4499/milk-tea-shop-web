import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, JwtService, AuthService, ProductService, CartService, OrderService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    JwtService,
    AuthService,
    ProductService,
    CartService,
    OrderService
  ],
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule { }
