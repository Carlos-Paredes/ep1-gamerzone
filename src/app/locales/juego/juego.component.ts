import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/entities/juego';
import { JUEGOS } from 'src/app/entities/juegos';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  juegos = JUEGOS;
  juegoElegido: Juego;

  aleatorio = Math.floor(Math.random()*this.juegos.length);
  juegoGanador: Juego = this.juegos[this.aleatorio];
  constructor() { }

  ngOnInit(): void {
  }
  seleccionar(juegoSeleccionado: Juego){
    console.log(juegoSeleccionado);
    this.juegoElegido = juegoSeleccionado;
  }

}
