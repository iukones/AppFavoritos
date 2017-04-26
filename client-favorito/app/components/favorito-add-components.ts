//Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {FavoritoService} from '../services/favoritoServices';
import {Favorito} from '../models/favoritoModels';

//Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favorito-add',
    templateUrl: 'app/views/favorito-add.html',
    providers: [FavoritoService]
})

//Clase del componente donde irán los datos y funcionalidades
export class FavoritoAddComponents implements OnInit{
  public title: string;
  public favorito: Favorito;
  public errorMessage

  constructor(
    private _favoritoService: FavoritoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.title = "Crear Marcador Favorito";
  }

  ngOnInit(){
    this.favorito = new Favorito("", "", "", "", "", "", "");
    console.log(this.favorito);
  }

  public onSubmit(){
    console.log(this.favorito);

    this._favoritoService.addFavorito(this.favorito).subscribe(
      response => {
        if(!response.favorito){
          alert('Error en el servidor')
        }
        else{
          this.favorito = response.favorito;
          this._router.navigate(['/marcador', this.favorito._id]);

        }
      },
      error => {
        this.errorMessage = <any>error;

        if(this.errorMessage != null){
            console.log(this.errorMessage);
            alert('Error en la petición');
        }
      }
    );
  }

}
