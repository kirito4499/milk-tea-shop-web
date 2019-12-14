import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService, User } from "src/app/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

    constructor(
        private translate: TranslateService,
        private authService: AuthService,
        public router: Router
    ) { }

    ngOnInit() {
        if (this.authService.isUserLoggedIn()) {
            this.authService.loadUserPayload();
            if (this.authService.currentUser['role'] === 1) {
                this.router.navigate(['admin']);
            } else {
                this.router.navigate(['menu']);
            }
        }
    }

    onLoggedout() {
        this.authService.logoutUser();
        this.router.navigate(['login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
