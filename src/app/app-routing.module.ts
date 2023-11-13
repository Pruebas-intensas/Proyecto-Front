import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { CrudProductosComponent } from './views/crud-productos/crud-productos.component';
import { RegisterComponent } from './views/register/register.component';
import { HomeComponent } from './views/home/home.component';
import { DetalleProductoComponent } from './views/detalle-producto/detalle-producto.component';
import { DashboardOfertasComponent } from './views/dashboard-ofertas/dashboard-ofertas.component';



const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'productos', component: CrudProductosComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent},
    { path: 'detalle/:id', component: DetalleProductoComponent},
    { path: 'dashboard', component: DashboardOfertasComponent},
    { path: '**', redirectTo: ''}
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
