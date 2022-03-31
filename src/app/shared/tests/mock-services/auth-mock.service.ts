import { Observable } from "rxjs";
import { userMockData } from "../mock-data/user-mock-data";

export class AuthServiceMock {
  private isAuthenticated = true;
  private userAuthenticated = userMockData;

  constructor() { }

  login(body): Observable<any>{
    return new Observable((observer)=>{
        setInterval(()=>{
            observer.next({
                user: userMockData,
                token: 'token-mock'
            });
        },100);
    })
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
    return true;
  }

}
