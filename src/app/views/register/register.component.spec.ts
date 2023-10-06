import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    TestBed.configureTestingModule({
        declarations: [RegisterComponent],
        imports: [HttpClientTestingModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect form is valid', () => {
	fixture.nativeElement.querySelector('button').click();
	expect(component.registroForm.valid).toBeFalsy();
  });

  it('should validate correct user and password', () => {
	component.registroForm = formBuilder.group({
		email: 'rtallax@gmail.com',
		password: '123'
	})
	fixture.nativeElement.querySelector('button').click();
	expect(component.registroForm.valid).toBeTruthy();
  });

  it('should validate min length password', () => {
    component.registroForm.setValue({
        nombre: 'Pedro',
        apellido: 'Perez',
        email: 'pedro@gmail.com', 
        password: '123',
        cnfPass: '123'
    });
	fixture.nativeElement.querySelector('button').click();
	expect(component.registroForm.valid).toBeFalsy();
  });

  it('should validate min length nombre', () => {
    component.registroForm.setValue({
        nombre: 'Po',
        apellido: 'Perez',
        email: 'pedro@gmail.com', 
        password: '123456',
        cnfPass: '123456'
    });
	fixture.nativeElement.querySelector('button').click();
	expect(component.registroForm.valid).toBeFalsy();
  });

  it('should validate min length nombre', () => {
    component.registroForm.setValue({
        nombre: 'Pedro',
        apellido: 'Perez',
        email: 'pedro@gmail.com', 
        password: '123456',
        cnfPass: '123456'
    });
	fixture.nativeElement.querySelector('button').click();
	expect(component.registroForm.valid).toBeTruthy();
  });

});
