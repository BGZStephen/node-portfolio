import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http"
import "rxjs/Rx"
import { Router } from "@angular/router"
import { ApiService } from "../api.service"
import { environment } from '../../environments/environment'

@Injectable()
export class AdminDashboardApiService {

  constructor(
    private apiSettings: ApiService,
    private headers: Headers,
    private http: Http,
    private router: Router
  ) { }

  baseUrl: string = this.apiSettings.baseUrl
  authorization: String = environment.authorization

  login(userObject) {
    let headers = new Headers()
    headers.append('Authorization', `${this.authorization}`)
    return this.http.post(this.baseUrl + "users/authenticate", userObject, {headers: headers})
    .map(res => res.json())
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

  storeToken(tokenObject) {
    localStorage.setItem('token', tokenObject['token'])
    localStorage.setItem('user', JSON.stringify(tokenObject['user']))
  }

}
