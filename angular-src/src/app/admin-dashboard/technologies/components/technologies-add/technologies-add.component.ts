import { Component, OnInit } from '@angular/core';
import { TechnologiesApiService } from "../../technologies-api.service"

@Component({
  selector: 'portfolio-technologies-add',
  templateUrl: './technologies-add.component.html',
  styleUrls: ['./technologies-add.component.scss']
})
export class TechnologiesAddComponent implements OnInit {

  constructor(
    private apiService: TechnologiesApiService
  ) { }

  ngOnInit() {
  }

  saveTechnology(technologyObject) {
    this.apiService.saveTechnology(technologyObject)
    .subscribe(res => {
      console.log(res)
    })
  }

}
