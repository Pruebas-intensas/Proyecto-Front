import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    productos: any = [];
    productos_respaldo: any = [];
    busqueda: string = '';
    fechaActual: string = new Date().toISOString().slice(0, 10);

    constructor(private productoService: ProductoService) {
      	if (!window.localStorage.getItem('username')) {
    		window.location.href = environment.url_front;
      	}

        let response: any;

        this.productoService.get_all_productos().subscribe({
            next: (data: any) => {
              response = { ...response, ...data};
            },
            error: (error: any) => {
              console.log(error);
            },
            complete: () => {
              console.log(response);
              response.body = response.body.filter((producto: any) => {
                return producto.fecha_termino > this.fechaActual;
              });
              this.productos = response.body;
              this.productos_respaldo = response.body;
            }
        });
    }

  buscar(){
    this.productos = this.productos_respaldo;
    this.productos = this.productos.filter((producto: any) => {
      return producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase());
    }
    );
  }
}


