import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-examples-individual',
  templateUrl: './work-examples-individual.component.html',
  styleUrls: ['./work-examples-individual.component.scss']
})
export class WorkExamplesIndividualComponent implements OnInit {

  workExample: Object = {
    content: [
      {
        sectionId: 1,
        sectionType: 'one-column',
        sectionContent: 'blah blah content'
      },
      {
        sectionId: 2,
        sectionType: 'one-column',
        sectionContent: 'blah blah content'
      },
      {
        sectionId: 3,
        sectionType: 'one-column',
        sectionContent: 'blah blah content'
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
