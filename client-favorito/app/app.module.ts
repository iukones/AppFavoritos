import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { FavoritosListComponents } from './components/favoritos-list-components';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    FavoritosListComponents
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
