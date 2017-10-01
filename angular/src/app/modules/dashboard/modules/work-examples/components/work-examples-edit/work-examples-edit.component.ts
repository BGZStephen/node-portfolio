import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { WorkExampleContentEditor } from 'app/services/workExampleContentEditor';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { NotificationService } from 'app/services/notification.service';
import { LoadingMaskService } from 'app/services/loading-mask.service';

@Component({
  selector: 'app-work-examples-edit',
  templateUrl: './work-examples-edit.component.html'
})
export class WorkExamplesEditComponent implements OnInit {

  editor: any;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private notification: NotificationService,
    private loading: LoadingMaskService,
    private router: Router,
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

  onDeletion() {
    this.editor.deleteWorkExample()
    .subscribe(res => {
      this.notification.success({
        message: 'Work example deleted successfully'
      })
      setTimeout(() => {
        this.router.navigate(['/dashboard/work-examples'])
      }, 1000)
    })
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
