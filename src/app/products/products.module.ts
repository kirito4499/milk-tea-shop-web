import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [ProductsComponent, ProductCategoryComponent, ProductCartComponent, ProductItemComponent],
  imports: [
    CommonModule,
    TranslateModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
