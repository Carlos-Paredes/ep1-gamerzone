import { Component, OnInit } from '@angular/core';
import { Futbolista } from 'src/app/entities/futbolista';
import { FUTBOLISTAS } from 'src/app/entities/futbolistas';

@Component({
  selector: 'app-futbolistas',
  templateUrl: './futbolistas.component.html',
  styleUrls: ['./futbolistas.component.css']
})
export class FutbolistasComponent implements OnInit {

  personas = FUTBOLISTAS;
  futbolistaElegido: Futbolista;


  constructor() { }

  ngOnInit(): void {
  }
  seleccionar(futbolistaSeleccionado: Futbolista){
    console.log(futbolistaSeleccionado);
    this.futbolistaElegido = futbolistaSeleccionado;
  }
}
