import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsolaService {

  constructor(private http: HttpClient) { }

  consolasSelect(){
    const ruta = "https://carlosp01.000webhostapp.com/servicio-gamerzone/consola.php";
    return this.http.get(ruta);
  }
}
