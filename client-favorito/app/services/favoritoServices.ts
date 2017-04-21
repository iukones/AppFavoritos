import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Favorito } from '../models/favoritoModels';

@Injectable()
export class FavoritoService{
  public url: String;
  
  constructor(private _http: Http){
    this.url = 'http://localhost:3000/api/';

  }
}
