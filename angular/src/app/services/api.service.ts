import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  loadCodeLab() {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.get(this.baseUrl + '/work-examples?type=code-lab')
    .map(res => res.json());
  }

  deleteWorkExample(workExampleObject) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.post(this.baseUrl + '/work-examples/deleteOne', workExampleObject, {headers: headers})
    .map(res => res.json());
  }

  loadWorkExample(workExampleObject) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.get(this.baseUrl + '/work-examples/' + workExampleObject._id, {headers: headers})
    .map(res => res.json());
  }

  loadWorkExamples() {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.get(this.baseUrl + '/work-examples', {headers: headers})
    .map(res => res.json());
  }

  saveWorkExample(workExampleObject) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.post(this.baseUrl + '/work-examples/create', workExampleObject, {headers: headers})
    .map(res => res.json());
  }

  updateWorkExample(workExampleObject) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.post(this.baseUrl + '/work-examples/update', workExampleObject, {headers: headers})
    .map(res => res.json());
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
