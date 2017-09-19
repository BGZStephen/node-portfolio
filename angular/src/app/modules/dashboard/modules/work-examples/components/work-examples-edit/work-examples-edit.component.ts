import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash'

@Component({
  selector: 'app-work-examples-edit',
  templateUrl: './work-examples-edit.component.html'
})
export class WorkExamplesEditComponent implements OnInit {

  workExample: any = {};

  sectionTypes = [
    {
      option: 'One Column',
      slug: 'oneColumn',
      columnClass: 'col-12',
      content: [this.createColumn()]
    },
    {
      option: 'Two Column',
      slug: 'twoColumn',
      columnClass: 'col-6',
      content: [this.createColumn(), this.createColumn()]
    },
    {
      option: 'Three Column',
      slug: 'threeColumn',
      columnClass: 'col-4',
      content: [this.createColumn(), this.createColumn(), this.createColumn()]
    }
  ]

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.loadWorkExample()
  }

  createColumn(columnClass?) {
    return {
      columnClass: columnClass || '',
      columnType: '',
      imageUrl: '',
      imageCaption: '',
      content: '',
    }
  }

  loadWorkExample() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((workExampleId) => {
      this.apiService.getWorkExample(workExampleId)
      .subscribe(workExample => {
        this.workExample = workExample;
      })
    })
  }

  onSave() {
    this.apiService.updateWorkExample(this.workExample)
    .subscribe(workExample => {
      console.log(workExample);
      this.workExample = workExample;
    })
  }

  onAddSection() {
    this.workExample.content.push(
      _.cloneDeep(this.sectionTypes[0])
    )
  }

  onRemoveSection(sectionIndex) {
    this.workExample.content.splice(sectionIndex, 1)
  }

  generateSectionIndex() {
    if (this.workExample.content.length === 0) {
      return 1;
    }

    if (this.workExample.content.length === 1) {
      return 2;
    }

    const largestIndex = this.workExample.content.reduce(function (a, b) {
      return a.id > b.id ? a.id : b.id;
    })

    return largestIndex + 1
  }

  updateSectionType(sectionTypeOption, sectionIndex) {
    let newSectionType;
    this.sectionTypes.forEach(function (sectionType) {
      if(sectionType.option === sectionTypeOption) {
        newSectionType = sectionType
      }
    });
    this.workExample.content[sectionIndex].content = newSectionType.content;
    this.workExample.content[sectionIndex].columnClass = newSectionType.columnClass;
  }
}
