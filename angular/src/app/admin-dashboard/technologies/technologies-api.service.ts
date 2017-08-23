import { Injectable } from '@angular/core';
import { Router } from "@angular/router"
import { Http, Headers } from "@angular/http"
import { ApiService } from "../../api.service"
import { environment } from '../../../environments/environment'

@Injectable()
export class TechnologiesApiService {

  constructor(
    private apiSettings: ApiService,
    private http: Http,
    private router: Router
  ) { }

  baseUrl: string = this.apiSettings.baseUrl
  authorization: String = environment.authorization

  clearComponent() {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': null}}]);
  }

  setComponent(component) {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': [component]}}]);
  }

  setComponentWithId(component, id) {
    this.router.navigate(['/dashboard', {outlets: {'adminDashboardOutlet': [component, id]}}]);
  }

  loadTechnology(technologyObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.get(this.baseUrl + "technologies?_id=" + technologyObject._id, {headers: headers})
    .map(res => res.json())
  }

  loadTechnologies() {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.get(this.baseUrl + "technologies", {headers: headers})
    .map(res => res.json())
  }

  updateTechnology(technologyObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.post(this.baseUrl + "technologies/update", technologyObject, {headers: headers})
    .map(res => res.json())
  }

  saveTechnology(technologyObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.post(this.baseUrl + "technologies/create", technologyObject, {headers: headers})
    .map(res => res.json())
  }

}
