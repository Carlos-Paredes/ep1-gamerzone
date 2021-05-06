import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './common/main-content/main-content.component';
import { BreakingbadComponent } from './components/breakingbad/breakingbad.component';
import { FifaComponent } from './components/fifa/fifa.component';

const routes: Routes = [
  {path: '', component: MainContentComponent},
  {path: 'fifa', component: FifaComponent},
  {path: 'breakingbad', component: BreakingbadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
