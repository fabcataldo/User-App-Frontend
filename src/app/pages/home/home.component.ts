import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUserAuthenticated();
  }
}
