import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BarraNavegacionComponent } from './barra-navegacion.component';
import { of } from 'rxjs';

describe('BarraNavegacionComponent', () => {
  let component: BarraNavegacionComponent;
  let fixture: ComponentFixture<BarraNavegacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraNavegacionComponent],
      imports: [RouterModule.forRoot([])],
      providers: [{ActivatedRoute, useValue: { params: of({ id: 1 }) }}]
    });
    fixture = TestBed.createComponent(BarraNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
