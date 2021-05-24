import { Component, Input, OnInit } from '@angular/core';
import { Consola } from 'src/app/entities/consola';
import { Product } from 'src/app/entities/product';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductosComponent implements OnInit {
  @Input() ConsolaX: Consola;
  listaProductos: Product[];
  constructor(private productosService: ProductoService) { }

  ngOnInit(): void {// Ocurre una sola vez al cargarse el componente
    console.log(this.ConsolaX);
  }
  ngOnChanges(): void {//Varias veces al detectar algún cambio
    console.log(this.ConsolaX);
    this.leerProductos();
  }

  leerProductos(){
    const idcategoria = this.ConsolaX.idcategoria;
    this.productosService.productosSelect(idcategoria).subscribe(
      (res: Product[])=> {
        this.listaProductos = res;
        console.log(res);
      }
    )
  }
  
}
