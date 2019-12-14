import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CategoryService, Category } from 'src/app/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  @Input() categories: Category[];
  @Output() changeCategory = new EventEmitter<string>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        this.categories = data;
      }
    )
  }

  getProductByCategory(id) {
    this.changeCategory.emit(id);
  }
}
