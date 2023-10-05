import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ModalEditarProductoComponent } from './modal-editar-producto.component';
import { FormsModule } from '@angular/forms';

describe('ModalEditarProductoComponent', () => {
  let component: ModalEditarProductoComponent;
  let fixture: ComponentFixture<ModalEditarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarProductoComponent],
      imports: [HttpClientTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(ModalEditarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
