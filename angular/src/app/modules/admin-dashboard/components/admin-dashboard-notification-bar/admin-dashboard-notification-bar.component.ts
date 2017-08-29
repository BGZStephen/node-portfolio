import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard-notification-bar',
  templateUrl: './admin-dashboard-notification-bar.component.html',
  styleUrls: ['./admin-dashboard-notification-bar.component.scss']
})
export class AdminDashboardNotificationBarComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
