import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { WorkExampleContentEditor } from 'app/services/workExampleContentEditor';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { NotificationService } from 'app/services/notification.service';
import { LoadingMaskService } from 'app/services/loading-mask.service';

@Component({
  selector: 'app-work-examples-add',
  templateUrl: './work-examples-add.component.html',
  styleUrls: ['./work-examples-add.component.scss']
})
export class WorkExamplesAddComponent implements OnInit {

  editor: any;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private notification: NotificationService,
    private loading: LoadingMaskService,
  ) {}

  ngOnInit() {
    this.editor = new WorkExampleContentEditor(this.apiService, this.notification, null);
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
