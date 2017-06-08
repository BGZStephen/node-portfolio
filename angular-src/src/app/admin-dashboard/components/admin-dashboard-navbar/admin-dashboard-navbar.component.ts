import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"

@Component({
  selector: 'portfolio-admin-dashboard-navbar',
  templateUrl: './admin-dashboard-navbar.component.html',
  styleUrls: ['./admin-dashboard-navbar.component.scss']
})
export class AdminDashboardNavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  menuVisible: boolean = true;
  activeSubMenu: number = -1;

  menuStyle() {
    if(this.menuVisible == false) {
      return {"max-height": "0", "min-height": "0"}
    } else {
      let minHeight = document.getElementsByClassName("navbar-list")[0].children.length * 53;
      return {"max-height": "100vh", "min-height": minHeight + "px"}
    }
  }

  setMenuStyle() {
    if(screen.width > 1024) {
      this.menuVisible = true;
    } else {
      this.menuVisible = false;
    }
  }

  setActiveSubMenu(index) {
    if(this.activeSubMenu == index) {
      this.activeSubMenu = -1
    } else {
      this.activeSubMenu = index
    }
  }

  clearComponent() {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': null}}]);
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': [component]}}]);
  }

  subMenuStyle(index) {
    if(this.activeSubMenu == index) {
      let minHeight = document.getElementsByClassName("navbar-secondary-list")[index].children.length * 51;
      return {"max-height": "auto", "min-height": minHeight + "px"}
    } else {
      return {"max-height": "0", "min-height": "0"}
    }
  }

}
