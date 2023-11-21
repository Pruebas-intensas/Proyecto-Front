import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

    constructor(public user: UserService, private router: Router, private fb: FormBuilder) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    login() {
        const data = this.loginForm.value;
        
        let response: any = {};
        this.user.login(data.email, data.password).subscribe({
            next: data => {
                response = { ...response, ...data }
            },
            error: err => {
                console.log("err:", err)
            },
            complete: () => {
                window.localStorage.setItem('username', response.body.nombre)
                window.localStorage.setItem('admin', response.body.admin)
                window.localStorage.setItem('id', response.body.id)
                console.log("response login:", response)
                if (response.status == 200) {
                    this.router.navigate(['/home']);
                }
            }
        });
    }
}