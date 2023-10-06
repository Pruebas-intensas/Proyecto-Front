import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    productos: any = [];
    busqueda: string = '';

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
              console.log(this.productos);
            }
        });
    }

  buscar(){
    console.log("");
  }
}


