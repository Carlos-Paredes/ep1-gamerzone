import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakingbadService {

  constructor(private http: HttpClient) { }

  personajesSelect(){
    const ruta ="https://www.breakingbadapi.com/api/characters";
    return this.http.get(ruta);
  }



}
