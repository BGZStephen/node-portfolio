import { Component, OnInit } from '@angular/core';
import { WorkExamplesApiService } from "../../work-examples-api.service"

@Component({
  selector: 'portfolio-work-examples-manage',
  templateUrl: './work-examples-manage.component.html',
  styleUrls: ['./work-examples-manage.component.scss']
})
export class WorkExamplesManageComponent implements OnInit {

  constructor(
    private apiService: WorkExamplesApiService
  ) { }

  ngOnInit() {
    this.loadWorkExamples()
  }

  workExamples: Array<object>

  loadWorkExamples() {
    this.apiService.loadWorkExamples()
    .subscribe(res => {
      console.log(res)
      this.workExamples = res.data
    })
  }

}
