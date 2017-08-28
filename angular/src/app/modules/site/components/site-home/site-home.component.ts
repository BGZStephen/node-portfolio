import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-home',
  templateUrl: './site-home.component.html',
  styleUrls: ['./site-home.component.scss']
})
export class SiteHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  setComponent(component) {
    this.router.navigate(['/home', {outlets: {'siteOutlet': [component]}}]);
  }

}
