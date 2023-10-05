import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DetalleProductoComponent } from './detalle-producto.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DetalleProductoComponent', () => {
  let component: DetalleProductoComponent;
  let fixture: ComponentFixture<DetalleProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleProductoComponent],
      imports: [HttpClientTestingModule, ActivatedRoute]
    });
    fixture = TestBed.createComponent(DetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
