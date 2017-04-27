"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var favoritos_list_components_1 = require("../components/favoritos-list-components");
var favorito_detail_components_1 = require("../components/favorito-detail-components");
var favorito_add_components_1 = require("../components/favorito-add-components");
var favorito_edit_components_1 = require("../components/favorito-edit-components");
var appRoutes = [
    { path: '', component: favoritos_list_components_1.FavoritosListComponents },
    { path: 'marcador/:id', component: favorito_detail_components_1.FavoritoDetailComponents },
    { path: 'agregar-marcador', component: favorito_add_components_1.FavoritoAddComponents },
    { path: 'editar-marcador/:id', component: favorito_edit_components_1.FavoritoEditComponents },
    // la ruta ** va al final de todas las rutas ya que esta indica url no existente.
    { path: '**', component: favoritos_list_components_1.FavoritosListComponents }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=appRoutes.js.map