import { Component, OnInit } from '@angular/core';
import { SiteApiService } from "../../services/site-api.service"

@Component({
  selector: 'portfolio-site-view',
  templateUrl: './site-view.component.html',
  styleUrls: ['./site-view.component.scss']
})
export class SiteViewComponent implements OnInit {

  constructor(
    private apiService: SiteApiService
  ) {}

  ngOnInit() {
  }

}
