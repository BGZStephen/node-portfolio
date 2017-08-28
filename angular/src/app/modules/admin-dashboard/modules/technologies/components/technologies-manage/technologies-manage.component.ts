import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../../services/api.service';

@Component({
  selector: 'app-technologies-manage',
  templateUrl: './technologies-manage.component.html',
  styleUrls: ['./technologies-manage.component.scss']
})
export class TechnologiesManageComponent implements OnInit {

  technologies: Array<object>;

  constructor (
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.loadTechnologies();
  }

  loadTechnologies() {
    this.apiService.loadTechnologies()
    .subscribe(res => {
      if (res.success) {
        this.technologies = res.data;
      } else {
        this.technologies = [];
      }
    });
  }

}
