import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidsService {

  constructor(private http: HttpClient) { }

  CovidSelect(){
    const ruta = "https://api.covidtracking.com/v1/us/daily.json";
    return this.http.get(ruta);
  }
}