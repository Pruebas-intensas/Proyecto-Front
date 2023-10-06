import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './detalle-producto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('DetalleProductoComponent', () => {
  let component: DetalleProductoComponent;
  let fixture: ComponentFixture<DetalleProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleProductoComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      providers: [{ActivatedRoute, useValue: { params: of({ id: 1 }) }}]
    });
    fixture = TestBed.createComponent(DetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
