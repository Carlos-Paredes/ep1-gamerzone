import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { MainContentComponent } from './common/main-content/main-content.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { FifaComponent } from './components/fifa/fifa.component';
import { BreakingbadComponent } from './components/breakingbad/breakingbad.component';
import { FutbolistasComponent } from './locales/futbolistas/futbolistas.component';
import { JuegoComponent } from './locales/juego/juego.component';
import { CovidComponent } from './components/covid/covid.component';
import { LolComponent } from './locales/lol/lol.component';
import { CatalogoEmpresaComponent } from './components/catalogo-empresa/catalogo-empresa.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainNavComponent,
    MainContentComponent,
    MainFooterComponent,
    FifaComponent,
    BreakingbadComponent,
    FutbolistasComponent,
    JuegoComponent,
    CovidComponent,
    LolComponent,
    CatalogoEmpresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FilterPipeModule,
    HttpClientModule,
    RouterModule.forChild([])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
