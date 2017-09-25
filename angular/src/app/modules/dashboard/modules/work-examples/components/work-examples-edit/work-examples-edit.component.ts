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
        this.editor = new WorkExampleContentEditor(this.apiService, workExample);
      });
    });
  }

  onSave() {
    this.editor.save()
  }

  onAddSection() {
    this.editor.addSection()
  }

  onRemoveSection(index) {
    this.editor.removeSection(index)
  }

  onImageUpload(event, sectionIndex?, columnIndex?) {
    const image = event.target.files[0];
    this.apiService.uploadImage(image)
    .subscribe(res => {
      if(sectionIndex && columnIndex) {
        const imageUrl = res.secure_url;
        this.editor.addImage(imageUrl, sectionIndex, columnIndex);
      }
    },
    error => {
      console.log(error);
    });
  }
}
