import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable()
export class AuthService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization;

  constructor(
    private http: Http,
    private router: Router
  ) { }

  authenticate(credentials) {
    const headers = new Headers();
    headers.append('Authorization', `${this.authorization}`);
    this.http.post(`${this.baseUrl}/users/authenticate`, credentials, {headers: headers})
    .map(res => res.json())
    .subscribe(authenticated => {
      if (authenticated.success) {
        this.storeToken(authenticated.token);
        this.router.navigate(['/dashboard']);
      }
    },
    error => {
      console.log(error);
    });
  }

  storeToken(token) {
    console.log(token);
    localStorage.setItem('token', token);
  }
}
