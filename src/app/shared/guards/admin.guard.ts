import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "src/app/core";

@Injectable()
export class AdminGuard implements CanActivate {
    userToken: any;
    
    constructor(private authService: AuthService, private router: Router) {}

    canActivate() {
        this.authService.loadUserToken();
        this.userToken = this.authService.userToken;
        let tokenInfo = this.authService.getDecodedAccessToken(this.userToken);
        if (this.authService.isUserLoggedIn() && tokenInfo.role === 1) {
            return true;
        } else {
            this.router.navigate(['home']);
            return false;
        }
    }
}
