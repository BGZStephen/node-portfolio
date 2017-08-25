import { Component, OnInit } from '@angular/core';
import { AdminDashboardApiService } from "../../services/admin-dashboard-api.service"

@Component({
  selector: 'portfolio-admin-dashboard-notification-bar',
  templateUrl: './admin-dashboard-notification-bar.component.html',
  styleUrls: ['./admin-dashboard-notification-bar.component.scss']
})
export class AdminDashboardNotificationBarComponent implements OnInit {

  constructor(
    private apiService: AdminDashboardApiService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.apiService.logout()
  }

}
