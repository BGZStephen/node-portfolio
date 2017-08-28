import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-work-examples-manage',
  templateUrl: './work-examples-manage.component.html',
  styleUrls: ['./work-examples-manage.component.scss']
})
export class WorkExamplesManageComponent implements OnInit {

  workExamples: Array<object>;

  constructor(
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    this.loadWorkExamples();
  }

  deleteWorkExample(workExampleObject) {
    this.apiService.deleteWorkExample(workExampleObject)
    .subscribe(res => {
      if (res.success) {
        this.flashMessage.show(res.message, {cssClass: 'flash-success--dashboard', timeout: 3000});
        this.loadWorkExamples();
      } else {
        this.flashMessage.show('Work example deletion failed', {cssClass: 'flash-failure--dashboard', timeout: 3000});
      }
    });
  }

  loadWorkExamples() {
    this.apiService.loadWorkExamples()
    .subscribe(res => {
      console.log(res);
      this.workExamples = res.data;
    });
  }

}
