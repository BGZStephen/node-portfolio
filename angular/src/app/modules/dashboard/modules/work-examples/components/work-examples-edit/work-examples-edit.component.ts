import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

class Column {
  columnType: "text"
}

const SectionTypes = {
  oneColumn: {
    class: "col-12",
    columns: [new Column()]
  },
  twoColumn: {
    class: "col-6",
    columns: [new Column(), new Column()]
  },
  threeColumn: {
    class: "col-4",
    columns: [new Column(), new Column(), new Column()]
  }
}

@Component({
  selector: 'app-work-examples-edit',
  templateUrl: './work-examples-edit.component.html'
})
export class WorkExamplesEditComponent implements OnInit {

  workExample: Object = {};

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
    this.workExample['content'].push({
      id: this.generateSectionIndex(),
      type: SectionTypes.oneColumn,
      content: SectionTypes.oneColumn.columns
    })
  }

  onRemoveSection(sectionIndex) {
    this.workExample['content'].splice(sectionIndex, 1)
  }

  generateSectionIndex() {
    if (this.workExample['content'].length === 0) {
      return 1;
    }

    if (this.workExample['content'].length === 1) {
      return 2;
    }

    const largestIndex = this.workExample['content'].reduce(function (a, b) {
      return a.id > b.id ? a.id : b.id;
    })

    return largestIndex + 1
  }

  updateSectionType(sectionType, sectionIndex) {
    this.workExample['content'][sectionIndex]['type'] = SectionTypes[sectionType];
    this.workExample['content'][sectionIndex]['content'] = SectionTypes[sectionType].columns;
  }
}
