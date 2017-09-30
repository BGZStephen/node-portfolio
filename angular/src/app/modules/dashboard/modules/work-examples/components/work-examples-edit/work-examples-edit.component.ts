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
        this.editor.initialise()
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

  onImageUpload(event, sectionIndex?, columnIndex?) {
    this.loading.show()
    const image = event.target.files[0];
    this.apiService.uploadImage(image)
    .subscribe(async (res) => {
      if(sectionIndex >= 0 && columnIndex >= 0) {
        const imageUrl = res.secure_url;
        try {
          await this.editor.insertImage(imageUrl, sectionIndex, columnIndex);
          this.loading.hide()
          this.editor.save()
          this.notification.success({
            message: 'Upload successful',
          });
        } catch (error) {
          this.loading.hide()
          this.notification.error({
            message: error,
          });
        }
      }
    },
    error => {
      this.notification.error({
        message: error,
      });
    });
  }
}
