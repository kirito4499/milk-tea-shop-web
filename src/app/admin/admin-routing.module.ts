import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "../shared";
import { ProductListComponent } from "./product-list/product-list.component";
import { OrderListComponent } from "./order-list/order-list.component";

const routes: Routes = [
    {
        path: "",
        component: AdminComponent,
        children: [
            {
                path: "order",
                component: OrderListComponent,
                canActivate: [AdminGuard]
            },
            {
                path: "product",
                component: ProductListComponent,
                canActivate: [AdminGuard]
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
