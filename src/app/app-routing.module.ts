import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './common/main-content/main-content.component';
import { BreakingbadComponent } from './components/breakingbad/breakingbad.component';
import { CovidComponent } from './components/covid/covid.component';
import { FifaComponent } from './components/fifa/fifa.component';
import { FutbolistasComponent } from './locales/futbolistas/futbolistas.component';
import { JuegoComponent } from './locales/juego/juego.component';
import { LolComponent } from './locales/lol/lol.component';

const routes: Routes = [
  {path: '', component: MainContentComponent},
  {path: 'fifa', component: FifaComponent},
  {path: 'breakingbad', component: BreakingbadComponent},
  {path: 'futbolistas', component: FutbolistasComponent},
  {path: 'juegos', component: JuegoComponent},
  {path: 'covids', component: CovidComponent},
  {path: 'lols', component: LolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
