import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-dashboard-login',
  templateUrl: './dashboard-login.component.html'
})
export class DashboardLoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  authenticate(credentials) {
    console.log(credentials)
    this.authService.authenticate(credentials)
    .subscribe(res => {
      console.log(res)
    })
  }

}
