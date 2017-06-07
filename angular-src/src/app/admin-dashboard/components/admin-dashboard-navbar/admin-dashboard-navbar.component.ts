import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio-admin-dashboard-navbar',
  templateUrl: './admin-dashboard-navbar.component.html',
  styleUrls: ['./admin-dashboard-navbar.component.scss']
})
export class AdminDashboardNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuVisible: boolean = true;

  setMenuStyle() {
    if(screen.width > 1024) {
      this.menuVisible = true;
    } else {
      this.menuVisible = false;
    }
  }

  menuStyle() {
    if(this.menuVisible == false) {
      return {"max-height": "0", "min-height": "0"}
    } else {
      let minHeight = document.getElementsByClassName("navbar-list")[0].children.length * 53;
      return {"max-height": "auto", "min-height": minHeight + "px"}
    }
  }

}
