import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  productosSelect(idcategoria){
    const ruta = "https://carlosp01.000webhostapp.com/servicio-gamerzone/servicioproductos.php";

    const formData: FormData = new FormData();
    formData.append("caty",idcategoria)

    return this.http.post(ruta, formData).pipe(
      map((res) => {
        return res
      })
    )
  }
}
