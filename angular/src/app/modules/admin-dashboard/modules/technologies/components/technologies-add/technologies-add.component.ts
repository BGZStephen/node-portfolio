import { Component, OnInit } from '@angular/core';
import { TechnologiesApiService } from '../../technologies-api.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-technologies-add',
  templateUrl: './technologies-add.component.html',
  styleUrls: ['./technologies-add.component.scss']
})
export class TechnologiesAddComponent implements OnInit {

  constructor(
    private apiService: TechnologiesApiService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  saveTechnology(technologyObject) {
    this.apiService.saveTechnology(technologyObject)
    .subscribe(res => {
      if (res.success) {
        this.flashMessage.show(res.message, {cssClass: 'flash-success--dashboard', timeout: 3000});
        setTimeout(() => {
          this.apiService.setComponent('technologies-manage');
        }, 500);
      } else {
        this.flashMessage.show('Technology save failed', {cssClass: 'flash-failure--dashboard', timeout: 3000});
      }
    });
  }

}
