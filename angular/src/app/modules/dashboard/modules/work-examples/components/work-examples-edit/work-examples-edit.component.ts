import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

class Column {
  columnType: '';
  imageUrl: '';
  imageCaption: '';
  content: '';
}

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
      class: 'col-12',
      columns: [new Column()]
    },
    {
      option: 'Two Column',
      slug: 'twoColumn',
      class: 'col-6',
      columns: [new Column(), new Column()]
    },
    {
      option: 'Three Column',
      slug: 'threeColumn',
      class: 'col-4',
      columns: [new Column(), new Column(), new Column()]
    }
  ]

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.loadWorkExample()
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

  }

  onAddSection() {
    this.workExample.content.push(
      this.sectionTypes[0]
    )
    console.log(this.workExample)
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
    this.workExample.content[sectionIndex] = newSectionType;
    console.log(this.workExample)
  }
}
