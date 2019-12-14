import { Component, OnInit } from "@angular/core";
import {
    ProductService,
    Product,
    CategoryService,
    Category
} from "src/app/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
    products: Product[];
    categories: Category[];
    productForm: FormGroup;
    productAction: string = "";
    selectedProductId: string;

    constructor(
        private formBuilder: FormBuilder,
        private productService: ProductService,
        private categoryService: CategoryService
    ) {}

    ngOnInit() {
        this.categoryService.getAllCategories().subscribe(data => {
            this.categories = data;
            this.getAllProduct();
        });
        this.initForm();
    }

    getAllProduct() {
        this.productService.getAllProducts().subscribe(data => {
            this.products = data;
        });
    }

    initForm() {
        this.productForm = this.formBuilder.group({
            name: ["", Validators.required],
            price: ["", Validators.required],
            imageURL: ["", Validators.required],
            categoryId: ["", Validators.required]
        });
    }

    getCategoryById(id) {
        const category = this.categories.find(category => category._id === id);
        return category["name"];
    }

    createProduct() {
        this.productAction = "create";
        this.productForm.reset();
    }

    editProduct(product) {
        // console.log(product);
        this.selectedProductId = product._id;
        this.productAction = "edit";
        this.productForm.setValue({
            name: product.name,
            price: product.price,
            imageURL: product.imageURL,
            categoryId: product.categoryId
        });
    }

    deleteProduct(product) {
      this.productService.deleteProduct(product._id).subscribe(
        (data) => {
          alert(data);
          this.getAllProduct();
        }
      )
    }

    putEditProduct() {
        const editedProduct = this.productForm.getRawValue();
        const id = this.selectedProductId;
        this.productService
            .editProduct(id, editedProduct)
            .subscribe(data => {
                alert("edit success");
                // console.log(data);
                this.getAllProduct();
                this.productForm.reset();
            });
    }

    postCreateProduct() {
        const newProduct = this.productForm.getRawValue();
        this.productService.createNewProduct(newProduct).subscribe(data => {
            alert("create success");
            // console.log(data);
            this.getAllProduct();
            this.productForm.reset();
        });
    }
}
