import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritosListComponents } from '../components/favoritos-list-components';
import { FavoritoDetailComponents } from '../components/favorito-detail-components';
import { FavoritoAddComponents } from '../components/favorito-add-components';
import { FavoritoEditComponents } from '../components/favorito-edit-components';


const appRoutes: Routes = [
  {path: '', component: FavoritosListComponents},
  {path: 'marcador/:id', component: FavoritoDetailComponents },
  {path: 'agregar-marcador', component: FavoritoAddComponents},
  {path: 'editar-marcador/:id', component: FavoritoEditComponents },
  // la ruta ** va al final de todas las rutas ya que esta indica url no existente.
  {path: '**', component: FavoritosListComponents}

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
