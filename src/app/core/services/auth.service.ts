import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";
import { User, Cart } from "../models";
import { JwtService } from "./jwt.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import * as jwt_decode from "jwt-decode";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    public currentUser: User;
    public userToken: String;

    constructor(
        private apiService: ApiService,
        private jwtService: JwtService
    ) {}

    registerUser(user): Observable<User> {
        return this.apiService.post("/user/register", user);
    }

    loginUser(user): Observable<any> {
        return this.apiService.post("/user/login", user);
    }

    logoutUser() {
        localStorage.clear();
    }

    storeUserData(data) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        this.currentUser = data.user;
    }

    isUserLoggedIn = () => {
        let jwtHelper = new JwtHelperService();
        if (localStorage["token"] == undefined) return false;
        return !jwtHelper.isTokenExpired(localStorage["token"]);
    };

    loadUserPayload() {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
    }

    loadUserToken() {
        this.userToken = localStorage.getItem('token');
    }

    getDecodedAccessToken = (token: string): any => {
        try {
            return jwt_decode(token);
        } catch (Error) {
            return null;
        }
    };
}
