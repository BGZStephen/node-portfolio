import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-website-home',
  templateUrl: './website-home.component.html',
  styleUrls: ['./website-home.component.scss']
})
export class WebsiteHomeComponent implements OnInit {
    workExamples = [];

    constructor(
      private apiService: ApiService
    ) {

    }

    ngOnInit() {
      this.apiService.getWorkExamples()
      .subscribe(workExamples => {
        this.workExamples = workExamples;
        console.log(workExamples);
      });
    }
}
