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
}
