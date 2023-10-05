import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { CrudProductosComponent } from './views/crud-productos/crud-productos.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'productos', component: CrudProductosComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }

export const routingComponents = [
    LoginComponent,
    CrudProductosComponent
]
