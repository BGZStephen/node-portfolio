import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-technologies-add',
  templateUrl: './technologies-add.component.html',
  styleUrls: ['./technologies-add.component.scss']
})
export class TechnologiesAddComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  saveTechnology(technologyObject) {

  }

}
