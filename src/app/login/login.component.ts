import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { routerTransition } from "../router.animations";
import { AuthService } from "../core/services";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        public router: Router
    ) {}

    ngOnInit() {
        this.initLoginForm();
    }

    initLoginForm() {
        this.loginForm = this.formBuilder.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    onUserLogin() {
        const f = this.loginForm.getRawValue();
        const user = {
            email: f.email.toLowerCase(),
            password: f.password
        };
        this.authService.loginUser(user).subscribe(
            data => {
                console.log(data);
                this.authService.storeUserData(data)
                if (data.role === 1) {
                    this.router.navigate(['admin']);
                }
                if (data.role === 0) {
                    this.router.navigate(['menu']);
                }
            },
            err => {
                console.log(err);
                Object.keys(err).forEach(prop => {
                    const formControl = this.loginForm.get(prop);
                    if (formControl) {
                        formControl.setErrors({
                            serverError: err[prop]
                        });
                    }
                });
            }
        );
    }
}
