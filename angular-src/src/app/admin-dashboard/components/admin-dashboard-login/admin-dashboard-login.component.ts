import { Component, OnInit } from '@angular/core';
import { AdminDashboardApiService } from "../../admin-dashboard-api.service"

@Component({
  selector: 'portfolio-admin-dashboard-login',
  templateUrl: './admin-dashboard-login.component.html',
  styleUrls: ['./admin-dashboard-login.component.scss']
})
export class AdminDashboardLoginComponent implements OnInit {

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
