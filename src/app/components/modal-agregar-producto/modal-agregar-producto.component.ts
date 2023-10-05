import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-modal-agregar-producto',
  templateUrl: './modal-agregar-producto.component.html',
  styleUrls: ['./modal-agregar-producto.component.css']
})
export class ModalAgregarProductoComponent {
  
    constructor(private productoService: ProductoService) { }

    crearProducto() {
      //get the values from the input fields with id nombreProducto and precioMinimo
      const nombre = (<HTMLInputElement>document.getElementById('nombreProducto')).value;
      const precio_minimo = (<HTMLInputElement>document.getElementById('precioMinimo')).value;
      const descripcion = (<HTMLInputElement>document.getElementById('descripcionProducto')).value;

      if (!nombre || !precio_minimo || !descripcion) {
        alert('Ingrese todos los datos');
        return;
      }
      nombre.trim();

      //call the service method crear_producto
      this.productoService.crear_producto(nombre, parseInt(precio_minimo), descripcion).subscribe((data: any) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert('Producto creado');
          //close the modal
          let modal = document.getElementById('closeModal');
          if (modal) {
            modal.click();
          }
          //reload the page
          window.location.reload();
        }
      });
    }
}
