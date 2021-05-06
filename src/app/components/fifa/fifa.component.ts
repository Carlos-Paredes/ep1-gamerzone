import { Component, OnInit } from '@angular/core';
import { Fifa } from 'src/app/entities/fifa';
import { FifaService } from 'src/app/services/fifa.service';

@Component({
  selector: 'app-fifa',
  templateUrl: './fifa.component.html',
  styleUrls: ['./fifa.component.css']
})
export class FifaComponent implements OnInit {
  listaJugadores: Fifa[];
  constructor(private fifaService: FifaService) { }

  ngOnInit(): void {
    this.fifaService.fifaSelect().subscribe(
      (res: Fifa[]) =>{
        this.listaJugadores = res;
        console.log(res);
      }
    )
  }
}
