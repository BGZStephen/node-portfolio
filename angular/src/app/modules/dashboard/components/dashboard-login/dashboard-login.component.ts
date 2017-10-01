import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html'
})
export class DashboardLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  authenticate(credentials) {
    this.authService.authenticate(credentials);
  }

}
