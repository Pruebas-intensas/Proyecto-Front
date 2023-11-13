import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
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
import { HomeComponent } from './views/home/home.component';
import { DetalleProductoComponent } from './views/detalle-producto/detalle-producto.component';

import localeEsES from '@angular/common/locales/es';
import { DashboardOfertasComponent } from './views/dashboard-ofertas/dashboard-ofertas.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';

registerLocaleData(localeEsES);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CrudProductosComponent,
    ModalAgregarProductoComponent,
    ModalEditarProductoComponent,
    HomeComponent,
    DetalleProductoComponent,
    DashboardOfertasComponent,
    BarraNavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
