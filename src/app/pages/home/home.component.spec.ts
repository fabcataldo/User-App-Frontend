import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

import { HomeComponent } from './home.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AuthServiceMock } from 'src/app/shared/tests/mock-services/auth-mock.service';
import { userMockData } from 'src/app/shared/tests/mock-data/user-mock-data';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: AuthService,
          useClass: AuthServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    localStorage.setItem('token', JSON.stringify('token-mock'));
    component.authService.setUserAuthenticated(userMockData);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe validar que se vea el nombre del usuario que inició sesión', ()=>{
    fixture.detectChanges();
    const elementComponent = fixture.debugElement.query(By.css('#nombreUsuario')).nativeElement;
    expect(elementComponent.innerHTML).toContain(`Bienvenido a su dashboard ${component.user.name}`);
  });

});
