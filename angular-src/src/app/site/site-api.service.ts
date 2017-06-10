import { Injectable } from '@angular/core';
import { Router } from "@angular/router"
import { Http } from "@angular/http"

@Injectable()
export class SiteApiService {

  constructor(
    private http: Http,
    private router: Router
  ) { }

  baseUrl: string = "http://localhost:9000/"

  clearComponent() {
    this.router.navigate(['/home', {outlets: {'siteOutlet': null}}]);
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
