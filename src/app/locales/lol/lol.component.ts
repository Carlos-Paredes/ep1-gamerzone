import { Component, OnInit } from '@angular/core';
import { Csgoarma } from 'src/app/entities/csgoarma';
import { CSGOARMAS } from 'src/app/entities/csgoarmas';
import { LOL } from 'src/app/entities/lols';


@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.css']
})
export class LolComponent implements OnInit {
  campeones = LOL;
  armas = CSGOARMAS;
  listaArmas: Csgoarma;


    constructor() { }
  
    ngOnInit(): void {
        //seleccionar(armaSelecionada: Csgoarma){
        //console.log(armaSeleccionada);
        //this.listaArmas = arma;
      }
}

