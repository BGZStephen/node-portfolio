import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { Router } from "@angular/router"

@Injectable()
export class WorkExamplesApiService {

  constructor(
    private http: Http,
    private router: Router
  ) { }

  baseUrl: string = "http://localhost:9000/"

  clearComponent() {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': null}}]);
  }

  loadTechnologies() {
    return this.http.get(this.baseUrl + "technologies/getAll")
    .map(res => res.json())
  }

  loadWorkExample(workExampleObject) {
    return this.http.post(this.baseUrl + "work-examples/getById", workExampleObject)
    .map(res => res.json())
  }

  loadWorkExamples() {
    return this.http.get(this.baseUrl + "work-examples/getAll")
    .map(res => res.json())
  }

  saveWorkExample(workExampleObject) {
    return this.http.post(this.baseUrl + "work-examples/create", workExampleObject)
    .map(res => res.json())
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': [component]}}]);
  }

  setComponentWithId(component, id) {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': [component, id]}}]);
  }

  updateWorkExample(workExampleObject) {
    return this.http.post(this.baseUrl + "work-examples/update", workExampleObject)
    .map(res => res.json())
  }
}
