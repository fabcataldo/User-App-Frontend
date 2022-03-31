import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = 'http://localhost:3000/api/login';
  private isAuthenticated = false;
  private userAuthenticated;

  constructor(private http: HttpClient) { }

  login(body): Observable<any>{
    return this.http
      .post(
        this.authUrl, body
      );
  }

  setIsAuthenticated(value) {
    this.isAuthenticated = value;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  setUserAuthenticated(value) {
    this.userAuthenticated = value;
  }

  getUserAuthenticated() {
    return this.userAuthenticated;
  }

  isUserTokenSaved() {
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }

}
