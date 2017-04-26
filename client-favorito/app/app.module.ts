import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing, appRoutingProviders } from './routes/appRoutes';
import { AppComponent }  from './app.component';
import { FavoritosListComponents } from './components/favoritos-list-components';
import {FavoritoDetailComponents } from './components/favorito-detail-components';
import { FavoritoAddComponents } from './components/favorito-add-components';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    FavoritosListComponents,
    FavoritoDetailComponents,
    FavoritoAddComponents
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
