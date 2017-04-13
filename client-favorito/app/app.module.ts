import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FavoritosListComponents } from './components/favoritos-list-components'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FavoritosListComponents ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
