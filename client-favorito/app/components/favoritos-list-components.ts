import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FavoritoService} from '../services/favoritoServices';
import {Favorito} from '../models/favoritoModels';

@Component({
    selector: 'favoritos-list',
    templateUrl: 'app/views/favoritos-list.html',
    providers: [FavoritoService]

})
export class FavoritosListComponents implements OnInit{
    public title: String;
    // se agrega imagen de cargar o loading
    public loading: boolean;
    // fin imagen loadin
    public favoritos: Favorito[];
    public errorMessage;

    constructor(
        private _favoritoService: FavoritoService
    ) {
        this.title = 'Listado de Marcadores:';
        // se agrega imagen de cargar o loading
        this.loading = true;
    }

    ngOnInit(){
        console.log('FavoritosListComponents cargado!!');
        this._favoritoService.getFavoritos().subscribe(
            result => {
                console.log(result);
                this.favoritos = result.favoritos;
                if(!this.favoritos){
                    alert('Error en el servidor');
                }else{
                    this.loading = false;
                }
            },
            error => {
                this.errorMessage = <any>error;

                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                }
            }
        )
    }

}
