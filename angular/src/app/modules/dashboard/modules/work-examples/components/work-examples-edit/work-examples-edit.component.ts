import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash'
import { Http, Headers } from '@angular/http'

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
      columns: [this.createColumn()]
    },
    {
      option: 'Two Column',
      slug: 'twoColumn',
      columns: [this.createColumn(), this.createColumn()]
    },
    {
      option: 'Three Column',
      slug: 'threeColumn',
      columns: [this.createColumn(), this.createColumn(), this.createColumn()]
    }
  ]

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private http: Http,
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
      this.workExample = workExample;
    })
  }

  onAddSection() {
    this.workExample.content.push({
      option: 'One Column',
      slug: 'oneColumn',
      columnClass: 'col-12',
      columns: [this.createColumn()]
    })
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

  onUpload(event, workExampleId) {
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('workExampleId', workExampleId);
    formData.append('image', file, file.name);
    this.http.post(`http://localhost:9000/work-examples/imageUpload`, formData)
    .map(res => res.json())
    .subscribe(
        data => console.log('success'),
        error => console.log(error)
    )
  }

  updateSectionType(sectionTypeOption, sectionIndex) {
    let newSectionType;
    this.sectionTypes.forEach(function (sectionType) {
      if(sectionType.option === sectionTypeOption) {
        newSectionType = sectionType
      }
    });
    this.workExample.content[sectionIndex].columns = _.clone(newSectionType.columns);
    this.workExample.content[sectionIndex].columnClass = newSectionType.columnClass;
  }
}
