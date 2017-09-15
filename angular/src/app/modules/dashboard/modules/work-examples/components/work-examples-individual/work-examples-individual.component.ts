import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-examples-individual',
  templateUrl: './work-examples-individual.component.html'
})
export class WorkExamplesIndividualComponent implements OnInit {

  workExample: Object = {
    content: []
  }

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
        console.log(workExample)
        this.workExample = workExample;
      })
    })
  }

  addSection() {
    this.workExample['content'].push({
      sectionId: 1,
      sectionType: 'one-column',
      sectionContent: 'blah blah content'
    },)

  }

}
