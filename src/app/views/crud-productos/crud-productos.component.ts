import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-crud-productos',
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css']
})
export class CrudProductosComponent {

  productos: any = [];

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

}
