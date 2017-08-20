import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"
import { Router } from "@angular/router"
import { ApiService } from "../api.service"

@Injectable()
export class AdminDashboardApiService {

  constructor(
    private apiSettings: ApiService,
    private http: Http,
    private router: Router
  ) { }

  baseUrl: string = this.apiSettings.baseUrl

  login(userObject) {
    return this.http.post(this.baseUrl + "users/authenticate", userObject)
    .map(res => res.json())
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/login'])
  }

  storeToken(tokenObject) {
    localStorage.setItem('token', tokenObject.token)
    localStorage.setItem('user', JSON.stringify(tokenObject.user))
  }

}
