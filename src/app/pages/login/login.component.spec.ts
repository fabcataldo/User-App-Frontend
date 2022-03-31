import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { userMockData } from 'src/app/shared/tests/mock-data/user-mock-data';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientTestingModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sould create', () => {
    expect(component).toBeTruthy();
  });

  it('debe validar que cuando se haga click en el botón del form, el usuario debe poder iniciar sesión', ()=>{
    fixture.detectChanges();
    spyOn(component, 'onLogin');
    spyOn(component.authService, 'login');

    const elementComponent = fixture.debugElement.query(By.css('#botonLogin')).nativeElement;
    const elementComponent2 = fixture.debugElement.query(By.css('#username')).nativeElement;
    const elementComponent3 = fixture.debugElement.query(By.css('#password')).nativeElement;
    elementComponent2.value = 'Fabiocataldo123';
    elementComponent3.value = '1234';
    
    elementComponent.click();
    component.authService.login({username: userMockData.username, password: 'FabioCataldoPass1234'});
    expect(component.onLogin).toHaveBeenCalled();
    expect(component.authService.login).toHaveBeenCalled();
  });
});
