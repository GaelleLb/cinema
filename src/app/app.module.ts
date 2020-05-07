import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CinemaCardComponent } from './cinema-card/cinema-card.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { SeanceFilmComponent } from './seance-film/seance-film.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaListComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    CinemaCardComponent,
    FilmListComponent,
    FilmInfoComponent,
    SeanceFilmComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
