import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-website-navbar',
  templateUrl: './website-navbar.component.html'
  // styleUrls: ['./website-navbar.component.scss']
})
export class WebsiteNavbarComponent implements OnInit {

  contactModalVisible: Boolean = false;

  constructor() {

  }

  ngOnInit() {

  }

  toggleContactModalVisibility() {
    this.contactModalVisible = !this.contactModalVisible;
  }
}
