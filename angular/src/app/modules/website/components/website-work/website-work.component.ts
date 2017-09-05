import { OnInit, Component } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-website-work',
  templateUrl: './website-work.component.html'
})
export class WebsiteWorkComponent implements OnInit {

  workExamples = []

  constructor(
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.apiService.getWorkExamples()
    .subscribe(workExamples => {
      this.workExamples = workExamples;
      console.log(workExamples)
    });
  }
}
