import {Component} from '@angular/core';

@Component({
    selector: 'favoritos-list',
    templateUrl: 'app/views/favoritos-list.html'

})
export class FavoritosListComponents {
    public title: String;

    constructor() {
        this.title = 'Listado de Marcadores:';
    }


}
