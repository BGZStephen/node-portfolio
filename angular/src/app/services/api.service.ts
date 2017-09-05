import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs';

@Injectable()
export class ApiService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization;

  constructor(
    private http: Http,
    private router: Router
  ) {}

  getWorkExamples() {
    const headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.get(`${this.baseUrl}/work-examples`, {headers: headers})
    .map(res => res.json())
  }
}
