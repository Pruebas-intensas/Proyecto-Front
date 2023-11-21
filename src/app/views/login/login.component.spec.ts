import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { WebDriver, Builder, By, until } from 'selenium-webdriver';

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

  it('should validate correct user and password', () => {
	component.loginForm = formBuilder.group({
		email: 'no@existo.com',
		password: '123'
	})
	fixture.nativeElement.querySelector('button').click();
	expect(component.loginForm.valid).toBeFalsy();
  });

  let driver: WebDriver;

  beforeAll(async () => {
      // Setup Selenium WebDriver (example using Chrome)
      driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
      // Quit the WebDriver instance after all tests are done
      await driver.quit();
  });

  it('should perform a login', async () => {
      // Navigate to the Angular application
      await driver.get('https://pruebas-intensas.github.io/');
      await driver.sleep(1000);
      // escribir en nombre de usuario y contraseña en las casillas de id exampleInputEmail y exampleInputPassword
      await driver.findElement(By.id('exampleInputEmail')).sendKeys('user1@gmail.com');
      await driver.findElement(By.id('exampleInputPassword')).sendKeys('123');

      //press the button called myBtn
      const boton = await driver.wait(until.elementLocated(By.id('myBtn')), 500);
      await boton.click();
      // check if the element with id "userDropdown" is present
      await driver.wait(until.elementLocated(By.id('userDropdown')), 500);

      const currentUrl = await driver.getCurrentUrl();
      expect(currentUrl).toContain('/home');
  });

});
