import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CrudProductosComponent } from './views/crud-productos/crud-productos.component';
import { ModalAgregarProductoComponent } from './components/modal-agregar-producto/modal-agregar-producto.component';
import { ModalEditarProductoComponent } from './components/modal-editar-producto/modal-editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CrudProductosComponent,
    ModalAgregarProductoComponent,
    ModalEditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
