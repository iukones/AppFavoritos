//Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';

//Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/views/home.html'
})

//Clase del componente donde irán los datos y funcionalidades
export class AppComponent {
  public title: String;
  public description: String;
  constructor() {
    this.title = 'APP Favoritos Web';
    this.description = 'Aplicación web SPA con Angular 2'
  }

}
