import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard, AdminGuard } from './shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: './signup/signup.module#SignupModule'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AdminGuard]
    },
    {
        path: 'menu',
        loadChildren: './products/products.module#ProductsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'not-found',
        loadChildren: './not-found/not-found.module#NotFoundModule'
    },
    // { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
