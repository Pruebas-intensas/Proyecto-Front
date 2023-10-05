import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
    registroForm: FormGroup;
    nombre: string = "";
    apellido: string = "";
    email: string = "";
    password: string = "";
    cnfPass: string = "";

  constructor(public usuario: UserService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cnfPass: ['', Validators.required]
    });
  }

  register() {
    const data = this.registroForm.value;

    this.email = data.email;
    this.password = data.password;
    this.nombre = data.nombre + " " + data.apellido;
    
    let respuesta: any = {}

    this.usuario.register(this.email, data.password, this.nombre).subscribe({
      next: data => {
        respuesta = { ...respuesta, ...data }
      },
      error: err => {
        console.log("err:", err)
      },
      complete: () => {
        console.log("respuesta:", respuesta)
        this.router.navigate(['/']);
      }
    });
  }
}
