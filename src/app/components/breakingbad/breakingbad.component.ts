import { Component, OnInit } from '@angular/core';
import { BreakingBad } from 'src/app/entities/breakingbad';
import { BreakingbadService } from 'src/app/services/breakingbad.service';

@Component({
  selector: 'app-breakingbad',
  templateUrl: './breakingbad.component.html',
  styleUrls: ['./breakingbad.component.css']
})
export class BreakingbadComponent implements OnInit {
  listaPersonajes: BreakingBad[];
  constructor(private breakingbadService: BreakingbadService) { }

  ngOnInit(): void {
    this.breakingbadService.personajesSelect().subscribe(
      (res: BreakingBad[]) =>{
        this.listaPersonajes = res;
        console.log(res);
      }
    )
  }

}
