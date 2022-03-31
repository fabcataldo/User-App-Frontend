import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  userSubscription;

  constructor(
    public authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  onLogin(formValues){
    const bodyRequest = {
      username: formValues.username,
      password: formValues.password
    };
    this.userSubscription = this.authService.login(bodyRequest)
      .subscribe((response)=>{
        this.authService.setIsAuthenticated(true);
        this.authService.setUserAuthenticated(response.user);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error=> {
        console.log(error);
        this.snackBar.open(error.error.message, "", {
          duration: 1500,
          horizontalPosition: "center",
          verticalPosition: "top",
        });
      });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
