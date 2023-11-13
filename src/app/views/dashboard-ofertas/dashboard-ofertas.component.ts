import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { error } from 'jquery';

@Component({
  selector: 'app-dashboard-ofertas',
  templateUrl: './dashboard-ofertas.component.html',
  styleUrls: ['./dashboard-ofertas.component.css']
})
export class DashboardOfertasComponent {

  productos_usuario = [];
  productos_usuario_objeto: any = {};
  id_usuario: number = parseInt(window.localStorage.getItem('id') || '');
  ids_productos: any = [];
  
  constructor(ServicioProducto: ProductoService) {
    let respuesta: any;
    ServicioProducto.get_productos_usuario(this.id_usuario).subscribe({
      next: (data: any) => {
        respuesta = {...respuesta, ...data};
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        let oferta_mas_alta_usuario: number = 0;
        let oferta_mas_alta_producto: number = 0;
        let producto_oferta: any;
        let oferta_aux: any;
        console.log(respuesta);
        this.productos_usuario = respuesta.body;
        this.productos_usuario.forEach( (producto: any) => {
          if(producto.hasOwnProperty('ofertas') && producto.ofertas != null){
            producto.ofertas.sort((a: any, b: any) => b.monto - a.monto);
            oferta_mas_alta_usuario = producto.ofertas[0].monto;
            oferta_aux = producto.ofertas[0];
            if(oferta_aux.hasOwnProperty("producto") && oferta_aux.producto != null){
              producto_oferta = oferta_aux.producto;
              if(producto_oferta.hasOwnProperty("ofertas") && producto_oferta.ofertas != null){
                producto_oferta.ofertas.sort((a: any, b: any) => b.monto - a.monto);
                oferta_mas_alta_producto = producto_oferta.ofertas[0].monto;
              }
            }
          }
          let comprado: string = "no";
          if(producto.fecha_termino < new Date().toISOString().slice(0,10)){
            if(oferta_mas_alta_usuario >= oferta_mas_alta_producto){
              comprado = "sí";
            }
          }
          this.productos_usuario_objeto[producto.id] = {
            nombre: producto.nombre,
            fecha_termino: producto.fecha_termino,
            oferta_mas_alta_usuario: oferta_mas_alta_usuario,
            oferta_mas_alta_producto: oferta_mas_alta_producto,
            comprado: comprado
          }
          console.log(this.productos_usuario_objeto);    
          this.ids_productos = Object.keys(this.productos_usuario_objeto);
        });
      }
    });
  }
}
