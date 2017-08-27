import { Component, OnInit } from '@angular/core';
import { SiteApiService } from "../../services/site-api.service"

@Component({
  selector: 'portfolio-site-code-lab',
  templateUrl: './site-code-lab.component.html',
})

export class SiteCodeLabComponent implements OnInit {

  codelabExamples: Array<object>
  bars = document.getElementsByClassName("fa-bars")[0]
  terminal = document.getElementsByClassName("fa-terminal")[0]
  menuContainer = document.getElementsByClassName("menu-container")[0]

  constructor(
    private apiService: SiteApiService
  ) { }

  ngOnInit() {
    this.loadCodeLab()
    this.bars.classList.toggle("code-lab-color")
    this.terminal.classList.toggle("code-lab-color")
    this.menuContainer.classList.toggle("code-lab-background-color")
  }
  loadCodeLab() {
    this.apiService.loadCodeLab()
    .subscribe(res => {
      console.log(res)
      this.codelabExamples = res.data
    })
  }

    ngOnDestroy() {
      this.bars.classList.toggle("code-lab-color")
      this.terminal.classList.toggle("code-lab-color")
      this.menuContainer.classList.toggle("code-lab-background-color")
    }

  }
