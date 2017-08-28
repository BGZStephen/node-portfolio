import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-work-examples-add',
  templateUrl: './work-examples-add.component.html',
  styleUrls: ['./work-examples-add.component.scss']
})
export class WorkExamplesAddComponent implements OnInit {

  activeTechnologies: Array<object> = [];
  activeType: string;
  technologies: Array<object> = [];

  constructor(
    private apiService: ApiService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.loadTechnologies();
  }

  activeTechnologiesStyle(technologyId) {
    for (let i = 0; i < this.activeTechnologies.length; i++) {
      if (this.activeTechnologies[i]['_id'] === technologyId) {
        return {border: '3px solid #424a5d'};
      }
    }
    return {border: '3px solid white'};
  }

  loadTechnologies() {
    this.apiService.loadTechnologies()
    .subscribe(res => {
      if (res.success) {
        this.technologies = res.data;
      } else {
        this.technologies = [];
      }
    });
  }

  saveWorkExample(workExampleObject) {
    workExampleObject.technologies = this.activeTechnologies;
    workExampleObject.type = this.activeType;
    this.apiService.saveWorkExample(workExampleObject)
    .subscribe(res => {
      if (res.success) {
        this.flashMessage.show(res.message, {cssClass: 'flash-success--dashboard', timeout: 3000});
      } else {
        this.flashMessage.show('Work example save failed', {cssClass: 'flash-failure--dashboard', timeout: 3000});
      }
    });
  }

  toggleTechnology(technologyObject, index) {
    if (this.activeTechnologies.length === 0) {
      this.activeTechnologies.push(technologyObject);
    } else {
      for (const technology of this.activeTechnologies) {
        if (technology['_id'] === technologyObject._id) {
          return this.activeTechnologies = this.activeTechnologies.filter(function(el) {
            return el['_id'] !== technologyObject._id;
          });
        }
      }
      this.activeTechnologies.push(technologyObject);
    }
  }

  toggleType(type) {
    if (this.activeType === type) {
      this.activeType = '';
    } else {
      this.activeType = type;
    }
  }

  typeStyle(type) {
    if (type === this.activeType) {
      return {'background': '#ffd777', 'border': '4px solid #424a5d', 'color': '#424a5d'};
    } else {
      return {'background': '#424a5d', 'border': '4px solid #424a5d', 'color': '#ffd777'};
    }
  }

}
