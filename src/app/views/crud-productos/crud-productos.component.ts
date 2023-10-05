import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-crud-productos',
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css']
})
export class CrudProductosComponent {

  productos: any = [];
  nombreProducto: string = '';
  precioMinimo: number = 0;
  descripcionProducto: string = '';
  idProducto: number = 0;

  constructor(private productoService: ProductoService) { 
    let response: any;
    this.productoService.get_all_productos().subscribe({
      next: (data: any) => {
        response = { ...response, ...data};
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this.productos = response.body;
        //console.log(this.productos);
      }
    });
  }

  seleccionarProducto(nombre: string, precio_minimo: number, descripcion: string, id: number){
    this.nombreProducto = nombre;
    this.precioMinimo = precio_minimo;
    this.descripcionProducto = descripcion;
    this.idProducto = id;
  }

  eliminarProducto(id: number){
    // show confirm, if yes, then delete
    let response: any;
    window.confirm('¿Está seguro de eliminar este producto?') ? this.productoService.eliminar_producto(id).subscribe({
      next: (data: any) => {
        response = { ...response, ...data};
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        //console.log(response);
        // show alert
        if(response.body.status != 'error'){
          alert('Producto eliminado con éxito');
          // reload page
          window.location.reload();
        }

      }
    }) : null;
  }

}
