import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/service/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

    id_usuario: number = parseInt(window.localStorage.getItem('id') || '');

    ofertaForm: FormGroup;
    id: any;
    producto: any;
    precio_inicial: number = 0;

    render: boolean = false;
    oferta_max: number;

    constructor(private route: ActivatedRoute, private productoService: ProductoService, private fb: FormBuilder) { 
        let response: any;
        this.id = this.route.snapshot.paramMap.get("id")
        
        //console.log(this.id);

        this.productoService.get_producto(this.id).subscribe({
            next: (data: any) => {
              response = { ...response, ...data};
            },
            error: (error: any) => {
              console.log(error);
            },
            complete: () => {
                console.log(response.body);
                
                this.producto = response.body;
                this.precio_inicial = this.producto.precio_minimo;

                this.producto.ofertas.length > 0 ? this.oferta_max = this.producto.ofertas[0].monto : this.oferta_max = this.precio_inicial;
                
                this.ofertaForm = this.fb.group({
                    monto: [this.oferta_max, Validators.required]
                });

                this.render = true;
            }
        });
    }

    hacer_oferta() {
        let response: any;
        this.productoService.hacer_oferta(this.id, this.ofertaForm.value.monto, this.id_usuario).subscribe({
            next: (data: any) => {
              response = { ...response, ...data};
            },
            error: (error: any) => {
              console.log(error);
            },
            complete: () => {
                console.log(response.body);
                window.location.reload();
            }
        });
    }
}