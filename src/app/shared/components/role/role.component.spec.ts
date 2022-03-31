import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { RoleComponent } from './role.component';
import { userMockData } from 'src/app/shared/tests/mock-data/user-mock-data';

describe('RoleComponent', () => {
  let component: RoleComponent;
  let fixture: ComponentFixture<RoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleComponent ],
      imports: [
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleComponent);
    component = fixture.componentInstance;
    component.user = userMockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe validar que se vea el usuario logeado en la card', ()=>{
    fixture.detectChanges();
    const elementComponent = fixture.debugElement.query(By.css('.nombreUsuario')).nativeElement;
    const elementComponent2 = fixture.debugElement.query(By.css('.apellidoUsuario')).nativeElement;
    const elementComponent3 = fixture.debugElement.query(By.css('.edadUsuario')).nativeElement;
    const elementComponent4 = fixture.debugElement.query(By.css('.nombrePerfilUsuario')).nativeElement;

    expect(elementComponent.innerHTML).toContain(`Tu nombre: ${component.user.name}`);
    expect(elementComponent2.innerHTML).toContain(`Tu apellido: ${component.user.surname}`);
    expect(elementComponent3.innerHTML).toContain(`Tu edad: ${component.user.age}`);
    expect(elementComponent4.innerHTML).toContain(`Tu nombre de usuario: ${component.user.username}`);
  });

});
