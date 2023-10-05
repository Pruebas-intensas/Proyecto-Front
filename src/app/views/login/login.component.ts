import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    
    loginForm: FormGroup;
    email: string = '';
    password: string = '';
    dataUsuario: any;

    constructor(public user: UserService, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
        });
    }

    login() {
        let response: any = {};
        const data = this.loginForm.value;
        this.user.login(data.email, data.password).subscribe({
            next: data => {
                response = { ...response, ...data }
            },
            error: err => {
                console.log("err:", err)
            },
            complete: () => {
                console.log("response:", response)
                if (response.status == 200) {
                    this.router.navigate(['/home']);
                }
            }
        });
    }
}