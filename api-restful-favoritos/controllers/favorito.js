'use strict'
// ejemplo de rutas y parametros de tipo GET.
function prueba(req, res) {
    // funcion para probar un ruta opcional utilizando signo de ?, y parametro de ruta requerido sin signo...
    if(req.params.nombre) {
        var nombre = req.params.nombre;
    }else{
        var nombre = "Sin Nombre";
    }
    // se crean datos de tipo json para pintar en el navegador
    res.status(200).send({
        data: [2, 3, 4],
        message: "Hola Mundo con NodeJS y EXPRESS - "+nombre
    });
}
// ejemplo de rutas y parametros de tipo GET.
function getFavorito(req, res){
    var favoritoId = req.params.id;

    res.status(200).send({data: favoritoId});

}
// ejemplo de rutas y parametros de tipo GET.
function getFavoritos(req, res){

}
// ejemplo de rutas y parametros de tipo PUT.
function saveFavorito(req, res){
    var params = req.body;
    res.status(200).send({favorito: params})

}

function updateFavorito(req, res){
    var params = req.body;
    res.status(200).send({update: true, favorito: params})

}

function deleteFavorito(req, res){
    var favoritoId = req.params.id;
    res.status(200).send({delete: true, data: favoritoId})

}


module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito

}