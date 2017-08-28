import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-technologies-edit',
  templateUrl: './technologies-edit.component.html',
  styleUrls: ['./technologies-edit.component.scss']
})
export class TechnologiesEditComponent implements OnInit {

  technology: Object = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.loadTechnology();
  }

  loadTechnology() {
    this.activatedRoute.params.map(params => params['technologyId'])
    .subscribe(technologyId => {
      this.apiService.loadTechnology({_id: technologyId})
      .subscribe(res => {
        if (res.success) {
          this.technology = res.data[0];
        }
      });
    });
  }

  updateTechnology(technology, technologyId) {
  
  }

}
