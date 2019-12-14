import { Component, Output, EventEmitter, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/core";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
    constructor(
        private translate: TranslateService,
        private authService: AuthService,
        public router: Router
    ) {}

    ngOnInit() {

    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        this.authService.logoutUser();
        this.router.navigate(['login']);
    }
}
