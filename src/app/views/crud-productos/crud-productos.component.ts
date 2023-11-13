import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-crud-productos',
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css'],
})
export class CrudProductosComponent implements AfterViewInit{

  productos: any = [];
  nombreProducto: string = '';
  precioMinimo: number = 0;
  descripcionProducto: string = '';
  idProducto: number = 0;
  fechaTermino: string = '';

  fechaActual: string = new Date().toISOString().slice(0, 10);

  constructor(private productoService: ProductoService) { 
    console.log(this.fechaActual);
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
        console.log(this.productos);
      }
    });
  }

  ngAfterViewInit(): void {
    //console.log('ngOnInit');
    function toggleButtonContent() {
      if (window.innerWidth <= 1800) { // Cambia el ancho según tus necesidades
        $('.icon').show();
        $('.text').hide();
      } else {
        $('.icon').hide();
        $('.text').show();
      }
    }

    // Ejecuta la función al cargar la página y en cambios de tamaño de ventana
    toggleButtonContent();
    window.addEventListener('resize', toggleButtonContent);
    // ejecuta una vez que se haya cargado la página
    setTimeout(toggleButtonContent, 100); 
  }

  seleccionarProducto(nombre: string, precio_minimo: number, descripcion: string, id: number, fecha_termino: string){
    this.nombreProducto = nombre;
    this.precioMinimo = precio_minimo;
    this.descripcionProducto = descripcion;
    this.idProducto = id;
    this.fechaTermino = fecha_termino;
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

