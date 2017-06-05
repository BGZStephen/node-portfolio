import { Component, OnInit } from '@angular/core';
import { AdminDashboardApiService } from "../../admin-dashboard-api.service"

@Component({
  selector: 'portfolio-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private apiService: AdminDashboardApiService
  ) { }

  ngOnInit() {
  }

  login(userObject) {
    this.apiService.login(userObject)
    .subscribe(res => {
      if(res.success)
      this.apiService.storeToken(res)
    })
  }

}
