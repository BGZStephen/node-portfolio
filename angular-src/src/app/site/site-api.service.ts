import { Injectable } from '@angular/core';
import { Router } from "@angular/router"
import { Http } from "@angular/http"
import { ApiService } from "../api.service"

@Injectable()
export class SiteApiService {

  constructor(
    private apiSettings: ApiService,
    private http: Http,
    private router: Router
  ) { }

  baseUrl: string = this.apiSettings.baseUrl

  clearComponent() {
    this.router.navigate(['/home', {outlets: {'siteOutlet': null}}]);
  }

  loadCodeLab() {
    let query = {type: "code-lab"}
    return this.http.post(this.baseUrl + "work-examples/getByType", query)
    .map(res => res.json())
  }

  loadWorkExamples() {
    let query = {type: "work-example"}
    return this.http.post(this.baseUrl + "work-examples/getByType", query)
    .map(res => res.json())
  }

  setComponent(component) {
    this.router.navigate(['/home', {outlets: {'siteOutlet': [component]}}]);
  }

  setComponentWithId(component, id) {
    this.router.navigate(['/home', {outlets: {'siteOutlet': [component, id]}}]);
  }

}
