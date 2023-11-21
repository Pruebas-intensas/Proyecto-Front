import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [HttpClientTestingModule, ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should detect form is valid', () => {
	fixture.nativeElement.querySelector('button').click();
	expect(component.loginForm.valid).toBeFalsy();
  });

  it('should validate correct user and password', () => {
	component.loginForm = formBuilder.group({
		email: 'rtallax@gmail.com',
		password: '123'
	})
	fixture.nativeElement.querySelector('button').click();
	expect(component.loginForm.valid).toBeTruthy();
  });

  it('should validate password is not empty', () => {
	component.loginForm = formBuilder.group({
		email: 'no@existo.com',
		password: '123'
	})
	fixture.nativeElement.querySelector('button').click();
  console.log(component.loginForm);
	expect(component.loginForm.valid).toBeFalsy();
  });

});
