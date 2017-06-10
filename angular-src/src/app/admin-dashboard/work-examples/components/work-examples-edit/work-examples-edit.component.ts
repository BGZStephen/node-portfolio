import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { WorkExamplesApiService } from "../../work-examples-api.service"
import { FlashMessagesService } from "angular2-flash-messages"

@Component({
  selector: 'portfolio-work-examples-edit',
  templateUrl: './work-examples-edit.component.html',
  styleUrls: ['./work-examples-edit.component.scss']
})
export class WorkExamplesEditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: WorkExamplesApiService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.loadWorkExample()
    this.loadTechnologies()
  }

  workExample: object = {}
  technologies: Array<object> = []
  activeTechnologies: Array<object> = []

  activeTechnologiesStyle(technologyId) {
    for(let i = 0; i < this.activeTechnologies.length; i++) {
      if(this.activeTechnologies[i]['_id'] == technologyId) {
        return {border: "3px solid #424a5d"}
      }
    }
    return {border: "3px solid white"}
  }

  loadTechnologies() {
    this.apiService.loadTechnologies()
    .subscribe(res => {
      if(res.success) {
        this.technologies = res.data
      } else {
        this.technologies = []
      }
    })
  }

  loadWorkExample() {
    this.activatedRoute.params
    .map(params => params['workExampleId'])
    .subscribe(workExampleId => {
      this.apiService.loadWorkExample({_id: workExampleId})
      .subscribe(res => {
        if(res.success) {
          this.workExample = res.data
          console.log(this.workExample)
          this.setActiveTechnologies()
        } else {
          this.workExample = {}
        }
      })
    })
  }

  setActiveTechnologies() {
    this.activeTechnologies = this.workExample['technologies']
  }

  toggleTechnology(technologyObject, index) {
    if(this.activeTechnologies.length == 0) {
      this.activeTechnologies.push(technologyObject)
    } else {
      for(let technology of this.activeTechnologies) {
        if(technology['_id'] == technologyObject._id) {
          return this.activeTechnologies = this.activeTechnologies.filter(function(el) {
            return el['_id'] !== technologyObject._id;
          });
        }
      }
      this.activeTechnologies.push(technologyObject)
    }
  }

  updateWorkExample(workExampleObject, workExampleId) {
    workExampleObject._id = workExampleId
    workExampleObject.technologies = this.activeTechnologies
    this.apiService.updateWorkExample(workExampleObject)
    .subscribe(res => {
      console.log(res)
        if(res.success) {
          this.flashMessage.show(res.message, {cssClass: "flash-success--dashboard", timeout: 3000})
          setTimeout(() => {
            this.apiService.setComponent('work-examples-manage')
          }, 500)
        } else {
          this.flashMessage.show("Work example update failed", {cssClass: "flash-failure--dashboard", timeout: 3000})
        }
    })
  }

}