import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import { Router } from "@angular/router"
import { ApiService } from "../../api.service"

@Injectable()
export class WorkExamplesApiService {

  constructor(
    private apiSettings: ApiService,
    private http: Http,
    private router: Router
  ) { }

  baseUrl: string = this.apiSettings.baseUrl

  clearComponent() {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': null}}]);
  }

  deleteWorkExample(workExampleObject) {
    return this.http.post(this.baseUrl + "work-examples/deleteOne", workExampleObject)
    .map(res => res.json())
  }

  loadTechnologies() {
    return this.http.get(this.baseUrl + "technologies/getAll")
    .map(res => res.json())
  }

  loadWorkExample(workExampleObject) {
    return this.http.get(this.baseUrl + "work-examples?_id=" + workExampleObject._id)
    .map(res => res.json())
  }

  loadWorkExamples() {
    return this.http.get(this.baseUrl + "work-examples")
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
