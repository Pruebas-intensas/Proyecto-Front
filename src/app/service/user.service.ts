import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<any>{
        const req = new HttpRequest('POST',`${environment.url_back}/usuario/login`, { email, password });
        return this.http.request(req);
    }

    register(email: string, password: string,nombre: string): Observable<any>{
        const req = new HttpRequest('POST',`${environment.url_back}/usuario/register`, { email, password, nombre });
        return this.http.request(req);
    }
}