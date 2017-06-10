import { Injectable } from '@angular/core';
import { Router } from "@angular/router"
import { Http } from "@angular/http"

@Injectable()
export class TechnologiesApiService {

  constructor(
    private http: Http,
    private router: Router
  ) { }

  baseUrl: string = "http://localhost:9000/"

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
    return this.http.post(this.baseUrl + "technologies/getById", technologyObject)
    .map(res => res.json())
  }

  loadTechnologies() {
    return this.http.get(this.baseUrl + "technologies/getAll")
    .map(res => res.json())
  }

  updateTechnology(technologyObject) {
    return this.http.post(this.baseUrl + "technologies/update", technologyObject)
    .map(res => res.json())
  }

  saveTechnology(technologyObject) {
    return this.http.post(this.baseUrl + "technologies/create", technologyObject)
    .map(res => res.json())
  }

}