import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization;

  constructor(
    private http: Http,
    private router: Router
  ) {}

  getWorkExamples() {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.get(`${this.baseUrl}/work-examples`, {headers: headers})
    .map(res => res.json());
  }

  getWorkExample(id) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    return this.http.get(`${this.baseUrl}/work-examples/${id}`, {headers: headers})
    .map(res => res.json());
  }

  updateWorkExample(workExample) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);;
    return this.http.put(`${this.baseUrl}/work-examples/${workExample._id}`, workExample, {headers: headers})
    .map(res => res.json());
  }

  uploadImage(params) {
    const formData: FormData = new FormData();
    if(params.id && params.association) {
      formData.append(`${params.association}Id`, params.id);
    }
    formData.append('image', params.file, params.file.name);
    return this.http.post(`${this.baseUrl}/images/upload`, formData)
    .map(res => res.json())
  }
}
