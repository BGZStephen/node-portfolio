import { Component, OnInit } from '@angular/core';
import { SiteApiService } from "../../site-api.service"

@Component({
  selector: 'portfolio-site-work-examples',
  templateUrl: './site-work-examples.component.html',
  styleUrls: ['./site-work-examples.component.scss']
})

export class SiteWorkExamplesComponent implements OnInit {

  workExamples: Array<object>
  bars = document.getElementsByClassName("fa-bars")[0]
  terminal = document.getElementsByClassName("fa-terminal")[0]
  menuContainer = document.getElementsByClassName("menu-container")[0]

  constructor(
    private apiService: SiteApiService
  ) { }

  ngOnInit() {
    this.apiService.loadWorkExamples()
    .subscribe(res => {
      console.log(res)
      this.workExamples = res.data
    })
    this.bars.classList.toggle("work-samples-color")
    this.terminal.classList.toggle("work-samples-color")
    this.menuContainer.classList.toggle("work-samples-background-color")
  }

  ngOnDestroy() {
    this.bars.classList.toggle("work-samples-color")
    this.terminal.classList.toggle("work-samples-color")
    this.menuContainer.classList.toggle("work-samples-background-color")
  }

}
