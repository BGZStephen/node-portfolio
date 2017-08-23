import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http"
import { Router } from "@angular/router"
import { ApiService } from "../../api.service"
import { environment } from '../../../environments/environment'

@Injectable()
export class WorkExamplesApiService {

  constructor(
    private apiSettings: ApiService,
    private headers: Headers,
    private http: Http,
    private router: Router
  ) { }

  baseUrl: string = this.apiSettings.baseUrl
  authorization: String = environment.authorization

  clearComponent() {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': null}}]);
  }

  deleteWorkExample(workExampleObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.post(this.baseUrl + "work-examples/deleteOne", workExampleObject, {headers: headers})
    .map(res => res.json())
  }

  loadTechnologies() {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.get(this.baseUrl + "technologies", {headers: headers})
    .map(res => res.json())
  }

  loadWorkExample(workExampleObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.get(this.baseUrl + "work-examples?_id=" + workExampleObject._id, {headers: headers})
    .map(res => res.json())
  }

  loadWorkExamples() {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.get(this.baseUrl + "work-examples", {headers: headers})
    .map(res => res.json())
  }

  saveWorkExample(workExampleObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.post(this.baseUrl + "work-examples/create", workExampleObject, {headers: headers})
    .map(res => res.json())
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': [component]}}]);
  }

  setComponentWithId(component, id) {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': [component, id]}}]);
  }

  updateWorkExample(workExampleObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.post(this.baseUrl + "work-examples/update", workExampleObject, {headers: headers})
    .map(res => res.json())
  }
}
