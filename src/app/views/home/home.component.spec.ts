//! ARCHIVO RELOAD
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';
import { BarraNavegacionComponent } from 'src/app/components/barra-navegacion/barra-navegacion.component';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    window.localStorage.setItem('username', 'test');
    TestBed.configureTestingModule({
      declarations: [HomeComponent, BarraNavegacionComponent],
      imports: [HttpClientTestingModule, FormsModule]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    window.localStorage.removeItem('username');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
