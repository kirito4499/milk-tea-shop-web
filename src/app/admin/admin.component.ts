import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService, Category } from "../core";

@Component({
    selector: "app-admin",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
    categories: Category[];
    constructor(
        private router: Router,
        private categoryService: CategoryService
    ) {}

    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data;
        });
    }
}
