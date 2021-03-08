import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppComponent }  from './app.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
//NG MODULE PERMET DE DECLARER UN NOUVEAU MODULE  
@NgModule({
  imports:      [ BrowserModule ], //Permet de declarer tous les elements que l'on a besoin d'importer dans notre module, ONLY FOR module racine
  declarations: [ AppComponent, BorderCardDirective, PokemonTypeColorPipe ],  // Liste de tous les composants et directives qui appartiennent au module
  bootstrap:    [ AppComponent ]  // Permet d'identifier le composant racine que angular appel au demarage de l'app
})
export class AppModule { }