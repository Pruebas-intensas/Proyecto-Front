import { Component, Input } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-modal-editar-producto',
  templateUrl: './modal-editar-producto.component.html',
  styleUrls: ['./modal-editar-producto.component.css']
})
export class ModalEditarProductoComponent {
  
  @Input() nombreProducto: string = '';
  @Input() precioMinimo: number = 0;
  @Input() descripcionProducto: string = '';
  @Input() idProducto: number = 0;

  
  constructor(private productoService: ProductoService) {  
  }

  editarProducto(){
    if (!this.nombreProducto || !this.precioMinimo || !this.descripcionProducto) {
      alert('Ingrese todos los datos');
      return;
    }
    this.nombreProducto.trim();

    this.productoService.editar_producto(this.idProducto, this.nombreProducto, parseInt(this.precioMinimo.toString()), this.descripcionProducto).subscribe((data: any) => {
      if (data.error) {
        alert(data.error);
      } else {
        alert('Producto editado');
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
