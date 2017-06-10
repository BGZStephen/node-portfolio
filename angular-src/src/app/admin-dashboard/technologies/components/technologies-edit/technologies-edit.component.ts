import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router"
import { TechnologiesApiService } from "../../technologies-api.service"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'portfolio-technologies-edit',
  templateUrl: './technologies-edit.component.html',
  styleUrls: ['./technologies-edit.component.scss']
})
export class TechnologiesEditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: TechnologiesApiService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.loadTechnology()
  }

  technology: object = {}

  loadTechnology() {
    this.activatedRoute.params.map(params => params['technologyId'])
    .subscribe(technologyId => {
      this.apiService.loadTechnology({technologyId: technologyId})
      .subscribe(res => {
        if(res.success) {
          this.technology = res.data
        }
      })
    })
  }

  updateTechnology(technologyObject, technologyId) {
    technologyObject._id = technologyId
    this.apiService.updateTechnology(technologyObject)
    .subscribe(res => {
      if(res.success) {
        this.flashMessage.show("Technology updated", {cssClass: "flash-success--dashboard", timeout: 3000})
        setTimeout(() => {
          this.apiService.setComponent('technologies-manage')
        }, 500)
      } else {
        this.flashMessage.show("Technology update failed", {cssClass: "flash-failure--dashboard", timeout: 3000})
      }
    })
  }

}
