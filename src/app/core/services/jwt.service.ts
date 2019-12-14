import { Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class JwtService {
    getToken(): String {
        return window.localStorage["token"];
    }

    saveToken(token: String) {
        window.localStorage["token"] = token;
    }

    destroyToken() {
        window.localStorage.removeItem("token");
    }

    checkExpiredToken() {
        let jwtHelper = new JwtHelperService();
        const token = localStorage.getItem('token');
        return !jwtHelper.isTokenExpired(token);
    }
}
