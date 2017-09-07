import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-dashboard-work',
  templateUrl: './dashboard-work.component.html'
})
export class DashboardWorkComponent implements OnInit {

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
