import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';

@Component({
  selector: 'app-work-examples-list',
  templateUrl: './work-examples-list.component.html',
  styleUrls: ['./work-examples-list.component.scss']
})
export class WorkExamplesListComponent implements OnInit {

  workExamples: Array<object>

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getWorkExamples()
    .subscribe(workExamples => {
      this.workExamples = workExamples;
    },
    error => {
      console.log(error);
    })
  }
}
