import { Component, ViewEncapsulation } from '@angular/core';

import './styles/main.scss';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles/main.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'portfolio works!';
}
