import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable()
export class TechnologiesApiService {

  constructor(
    private http: Http
  ) { }

  baseUrl: string = "http://localhost:9000/"

  loadTechnologies() {
    return this.http.get(this.baseUrl + "technologies/getAll")
    .map(res => res.json())
  }

  saveTechnology(technologyObject) {
    return this.http.post(this.baseUrl + "technologies/create", technologyObject)
    .map(res => res.json())
  }

}
