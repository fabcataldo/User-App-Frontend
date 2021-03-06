import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isUserLogged: boolean = false;
  roleUserLogged: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isUserLogged = this.authService.getIsAuthenticated();
    this.roleUserLogged = this.authService.getUserAuthenticated();
  }

  onLogout(){
    this.authService.setIsAuthenticated(false);
    this.authService.setUserAuthenticated(null);
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
