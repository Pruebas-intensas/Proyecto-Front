import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  get_all_productos() {
    const req = new HttpRequest('GET', `${environment.url_back}/producto/all`, {
      responseType: 'json'
    });
    return this.http.request(req);
  }

  get_producto(id: number) {
    const req = new HttpRequest('GET', `${environment.url_back}/producto?id=${id}`, {
      responseType: 'json'
    });
    return this.http.request(req);
  }

  hacer_oferta(id_producto: number, monto: number, id_usuario: number) {
    const req = new HttpRequest('POST', `${environment.url_back}/oferta`, {
      id_producto: id_producto,
      monto: monto,
      id_usuario: id_usuario
    }, {
      responseType: 'json'
    });
    return this.http.request(req);
  }

  crear_producto(nombre: string, precio_minimo:number, descripcion: string){
    const req = new HttpRequest('POST', `${environment.url_back}/producto/`, {
      nombre: nombre,
      precio_minimo: precio_minimo,
      descripcion: descripcion
    });
    return this.http.request(req);
  } 

  editar_producto(id: number, nombre: string, precio_minimo:number, descripcion: string){
    const req = new HttpRequest('PUT', `${environment.url_back}/producto?id=${id}`, {
      nombre: nombre,
      precio_minimo: precio_minimo,
      descripcion: descripcion
    });
    return this.http.request(req);
  }

  eliminar_producto(id: number){
    const req = new HttpRequest('DELETE', `${environment.url_back}/producto?id=${id}`, {
      responseType: 'json'
    });
    return this.http.request(req);
  }
}
