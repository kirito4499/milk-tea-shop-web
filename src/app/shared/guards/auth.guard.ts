import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate() {
        if (this.authService.isUserLoggedIn()) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
