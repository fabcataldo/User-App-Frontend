import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { userMockData } from 'src/app/shared/tests/mock-data/user-mock-data';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    service.authUrl = 'http://localhost:3000/api/login';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe de hacer una petición para login', () => {
    service.login({username: userMockData.username, password: 'FabioCataldoPass1234'}).subscribe(response=>{
      expect(response).toBeTruthy();
    })
    const request = httpController.expectOne(service.authUrl);
    expect(request.request.method).toBe('POST');
    request.flush({user: userMockData, token: 'user-token'});
    httpController.verify();
  });
});
