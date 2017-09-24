import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { WorkExampleContentEditor } from '../../../../../../services/workExampleContentEditor';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-work-examples-edit',
  templateUrl: './work-examples-edit.component.html'
})
export class WorkExamplesEditComponent implements OnInit {

  editor: any;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private http: Http,
  ) {}

  ngOnInit() {
    this.loadWorkExample();
  }

  loadWorkExample() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((workExampleId) => {
      this.apiService.getWorkExample(workExampleId)
      .subscribe(workExample => {
        console.log('loading')
        this.editor = new WorkExampleContentEditor(workExample);
        console.log(this.editor.workExample);
      });
    });
  }

  onSave() {
    this.apiService.updateWorkExample(this.editor.workExample)
    .subscribe(workExample => {
      this.editor = new WorkExampleContentEditor(workExample)
    });
  }

  onRemoveSection(index) {
    this.editor.removeSection(index)
  }

  onAddSection() {
    this.editor.addSection()
  }

  onImageUpload(event) {
    const params = {
      file: event.target.files[0],
      association: 'workExample',
      id: this.editor.workExample._id
    };

    this.apiService.uploadImage(params)
    .subscribe(
      res => {
        this.editor.workExample = res;
      },
      error => {
        console.log(error);
      }
    );
  }
}
