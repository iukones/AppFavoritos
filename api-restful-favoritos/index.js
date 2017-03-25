'use strict'
// importamos configuracion de express desde appjs
var app = require('./app');
// se crea funcion para verificar que el puerto de servidor este "listen".
var port = process.env.PORT || 8083;

app.listen(8083, function(){
    console.log("API REST FAVORITOS funcionando en http://localhost:"+port);
});