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

<<<<<<< HEAD
  createColumn() {
    return {
      columnType: '',
      imageUrl: '',
      imageCaption: '',
      content: '',
    }
=======
  ngOnInit() {
    this.loadWorkExample();
>>>>>>> 6f78e37c9469aa68fad8f2afad28f74e30d124d1
  }

  ngOnInit() {
    this.loadWorkExample()
  }

  loadWorkExample() {
    this.activatedRoute.params
    .map(params => params['id'])
    .subscribe((workExampleId) => {
      this.apiService.getWorkExample(workExampleId)
      .subscribe(workExample => {
        console.log('loading')
        this.editor = new WorkExampleContentEditor(this.apiService, workExample);
        console.log(this.editor.workExample);
      });
    });
  }

  onSave() {
    this.apiService.updateWorkExample(this.editor.workExample)
    .subscribe(workExample => {
      this.editor = new WorkExampleContentEditor(this.apiService, workExample)
    });
  }

<<<<<<< HEAD
  onAddSection() {
    this.workExample.content.push(
      _.cloneDeep(this.sectionTypes[0])
    )
=======
  onRemoveSection(index) {
    this.editor.removeSection(index)
>>>>>>> 6f78e37c9469aa68fad8f2afad28f74e30d124d1
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
<<<<<<< HEAD
    });
    this.workExample.content[sectionIndex].columns = _.cloneDeep(newSectionType.columns);
=======
    );
>>>>>>> 6f78e37c9469aa68fad8f2afad28f74e30d124d1
  }
}
