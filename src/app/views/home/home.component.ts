import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    productos: any = [];
    fechaActual: string = new Date().toISOString().slice(0, 10);

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
              console.log(response);
              response.body = response.body.filter((producto: any) => {
                return producto.fecha_termino > this.fechaActual;
              });
              this.productos = response.body;
            }
        });
    }
}
