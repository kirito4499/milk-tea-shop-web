import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../router.animations";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../core";
import { Router } from "@angular/router";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.registerForm = this.formBuilder.group({
            email: ["", Validators.required],
            password: ["", Validators.required],
            password2: ["", Validators.required],
            phoneNumber: [
                "",
                [
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(10)
                ]
            ],
            firstName: ["", Validators.required],
            lastName: ["", Validators.required]
        });
    }

    onRegisterUser() {
        const f = this.registerForm.getRawValue();
        console.log(f);
        const user = {
            email: f.email.toLowerCase(),
            password: f.password,
            password2: f.password2,
            phoneNumber: f.phoneNumber,
            firstName: f.firstName,
            lastName: f.lastName
        };
        this.authService.registerUser(user).subscribe(
            data => {
                this.router.navigate(["login"]);
                console.log(data);
            },
            err => {
                console.log(err);
                
                Object.keys(err).forEach(prop => {
                    const formControl = this.registerForm.get(prop);
                    if (formControl) {
                        formControl.setErrors({
                            serverError: err[prop]
                        });
                    }
                });

                console.log(this.registerForm.controls)
            }
        );
    }

    allowNumbersOnly(e) {
        const code = e.which ? e.which : e.keyCode;
        if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
        }
    }
}
