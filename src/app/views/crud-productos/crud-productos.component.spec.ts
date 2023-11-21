//! ARCHIVO RELOAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ModalAgregarProductoComponent } from 'src/app/components/modal-agregar-producto/modal-agregar-producto.component';
import { ModalEditarProductoComponent } from 'src/app/components/modal-editar-producto/modal-editar-producto.component';
import { CrudProductosComponent } from './crud-productos.component';
import { BarraNavegacionComponent } from 'src/app/components/barra-navegacion/barra-navegacion.component';

describe('CrudProductosComponent', () => {
  let component: CrudProductosComponent;
  let fixture: ComponentFixture<CrudProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudProductosComponent,ModalAgregarProductoComponent, ModalEditarProductoComponent, BarraNavegacionComponent],
      imports: [HttpClientTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(CrudProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeAll(() => {
    window.localStorage.setItem('admin', 'true');
  });

  afterAll(() => {
    window.localStorage.removeItem('admin');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});