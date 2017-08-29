import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-navbar',
  templateUrl: './site-navbar.component.html',
  styleUrls: ['./site-navbar.component.scss']
})
export class SiteNavbarComponent implements OnInit {

  menuVisible = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }

  toggleMenuVisibility() {
    if (this.menuVisible && screen.width < 1024) {
      return {'left': '0px'};
    } else if (this.menuVisible && screen.width >= 1024) {
      return {'left': '40px'};
    } else if (!this.menuVisible && screen.width < 1024) {
      return {'left': '-100%'};
    } else {
      return {'left': '-400px'};
    }
  }

}
