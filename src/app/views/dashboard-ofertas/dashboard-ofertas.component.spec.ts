import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardOfertasComponent } from './dashboard-ofertas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BarraNavegacionComponent } from 'src/app/components/barra-navegacion/barra-navegacion.component';

describe('DashboardOfertasComponent', () => {
  let component: DashboardOfertasComponent;
  let fixture: ComponentFixture<DashboardOfertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOfertasComponent, BarraNavegacionComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(DashboardOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
