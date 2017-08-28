import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class TechnologiesApiService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization;

  constructor(
    private http: Http,
    private router: Router
  ) { }

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
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.get(this.baseUrl + '/technologies?_id=' + technologyObject._id, {headers: headers})
    .map(res => res.json());
  }

  loadTechnologies() {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.get(this.baseUrl + '/technologies', {headers: headers})
    .map(res => res.json());
  }

  updateTechnology(technologyObject) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.post(this.baseUrl + '/technologies/update', technologyObject, {headers: headers})
    .map(res => res.json());
  }

  saveTechnology(technologyObject) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.post(this.baseUrl + '/technologies/create', technologyObject, {headers: headers})
    .map(res => res.json());
  }

}
