import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-examples-individual',
  templateUrl: './work-examples-individual.component.html'
})
export class WorkExamplesIndividualComponent implements OnInit {

  workExample: Object = {
    content: []
  }

  constructor() { }

  ngOnInit() {
  }

  addSection() {
    this.workExample['content'].push({
      sectionId: 1,
      sectionType: 'one-column',
      sectionContent: 'blah blah content'
    },)

  }

}
