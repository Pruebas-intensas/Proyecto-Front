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
}
