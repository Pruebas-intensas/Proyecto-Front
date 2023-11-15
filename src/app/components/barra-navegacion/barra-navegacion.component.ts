import { Component } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {

  nombre_usuario: string = window.localStorage.getItem('username') || '';
  admin: boolean = window.localStorage.getItem('admin') === 'true' || false;

  constructor() {
  
  }

}
