import {Component} from '@angular/core';

@Component({
  selector: 'favoritos-list',
  templateUrl: 'app/views/favoritos-list.html'

})
 export class FavoritosListComponents {
   public title: String;
   public favoritos: Array<string>;
   public favoritosVisibles: boolean;

   constructor(){
     this.title = 'Listado de Marcadores:';
     this.favoritos = ['iukones.com', 'twitter.com/iukones', 'facebook.com/iukones' 'google.com/iukones'];
     this.favoritosVisibles = false;
   }

   showFavoritos(){
     this.favoritosVisibles = true;
   }
   hideFavoritos(){
     this.favoritosVisibles = false;
   }
 }
