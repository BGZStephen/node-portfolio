import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard-login',
  templateUrl: './admin-dashboard-login.component.html',
  styleUrls: ['./admin-dashboard-login.component.scss']
})
export class AdminDashboardLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(userObject: Object) {
    this.authService.login(userObject)
    .subscribe(res => {
      if (res.success) {
        this.authService.storeToken(res);
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
