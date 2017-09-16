import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-examples-individual',
  templateUrl: './work-examples-individual.component.html'
})
export class WorkExamplesIndividualComponent implements OnInit {

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
      id: this.generateSectionIndex()
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
}
