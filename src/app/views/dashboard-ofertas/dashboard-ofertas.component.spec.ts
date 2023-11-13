import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOfertasComponent } from './dashboard-ofertas.component';

describe('DashboardOfertasComponent', () => {
  let component: DashboardOfertasComponent;
  let fixture: ComponentFixture<DashboardOfertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOfertasComponent]
    });
    fixture = TestBed.createComponent(DashboardOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
