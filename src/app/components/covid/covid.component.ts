import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/entities/covid';
import { CovidsService } from 'src/app/services/covids.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {
  listaCovid: Covid[];
  constructor(private covidService: CovidsService) { }

  ngOnInit(): void {
    this.covidService.CovidSelect().subscribe(
      (res: Covid[]) => {
        this.listaCovid = res; //ahora solo queda mostrar datos 
        console.log(res)
      }
    )
  }

}