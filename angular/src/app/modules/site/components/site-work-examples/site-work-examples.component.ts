import { Component, OnInit } from '@angular/core';
import { SiteApiService } from '../../services/site-api.service';

@Component({
  selector: 'app-site-work-examples',
  templateUrl: './site-work-examples.component.html',
  styleUrls: ['./site-work-examples.component.scss'],
})

export class SiteWorkExamplesComponent implements OnInit {

  workExamples: Array<object>;
  bars = document.getElementsByClassName('fa-bars')[0];
  terminal = document.getElementsByClassName('fa-terminal')[0];
  menuContainer = document.getElementsByClassName('menu-container')[0];

  constructor(
    private apiService: SiteApiService
  ) {
    this.loadWorkExamples();
  }

  ngOnInit() {
    this.bars.classList.toggle('work-samples-color');
    this.terminal.classList.toggle('work-samples-color');
    this.menuContainer.classList.toggle('work-samples-background-color');
  }

  loadWorkExamples() {
    console.log('triggered');
    this.apiService.loadWorkExamples()
    .subscribe(res => {
      console.log(res);
      this.workExamples = res.data;
    });
  }
}
