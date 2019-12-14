import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Category } from '../models';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService: ApiService) { }

  getAllCategories(): Observable<Category[]>{
    return this.apiService.get('/category');
  }

  createCategory(category) {
    return this.apiService.post('/category/create', category);
  }
}
