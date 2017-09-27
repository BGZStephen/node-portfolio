import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { WorkExampleContentEditor } from '../../../../../../services/workExampleContentEditor';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { Http, Headers } from '@angular/http';
import { NotificationService } from '../../../../../../services/notification.service';
import { LoadingMaskService } from '../../../../../../services/loading-mask.service';

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
    private notification: NotificationService,
    private loading: LoadingMaskService,
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
        this.editor = new WorkExampleContentEditor(this.apiService, this.notification, workExample);
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

  onSectionUpdate(newSectionType, sectionIndex) {
    this.editor.updateSection(newSectionType, sectionIndex);
  }

  getColumnClass(numberOfColumns) {
    if (numberOfColumns === 1) {
      return 'col-12';
    } else if (numberOfColumns === 2) {
      return 'col-6';
    } else if (numberOfColumns === 3) {
      return 'col-4';
    }
  }

  onImageUpload(event, sectionIndex?, columnIndex?) {
    const image = event.target.files[0];
    this.apiService.uploadImage(image)
    .subscribe(res => {
      if(sectionIndex && columnIndex) {
        const imageUrl = res.secure_url;
        this.editor.addImage(imageUrl, sectionIndex, columnIndex);
      }
      this.notification.success({
        message: 'Upload successful',
      });
    },
    error => {
      this.notification.error({
        message: error,
      });
    });
  }
}
