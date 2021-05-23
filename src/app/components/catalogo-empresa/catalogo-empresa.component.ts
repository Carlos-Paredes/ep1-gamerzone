import { Component, Input, OnInit } from '@angular/core';
import { Consola } from 'src/app/entities/consola';
import { ConsolaService } from 'src/app/services/consola.service';

@Component({
  selector: 'app-catalogo-empresa',
  templateUrl: './catalogo-empresa.component.html',
  styleUrls: ['./catalogo-empresa.component.css']
})
export class CatalogoEmpresaComponent implements OnInit {

  listaConsolas: Consola[];
  constructor(private consolasService: ConsolaService) { }

  ngOnInit(): void {
    this.consolasService.consolasSelect().subscribe(
      (res: Consola[]) => {
        this.listaConsolas = res;
        console.log(res);
      }
    )
  }
}
