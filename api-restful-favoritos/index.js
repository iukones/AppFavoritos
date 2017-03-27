'use strict'
// importamos dependencia mongoose.
var mongoose = require('mongoose');
// importamos configuracion de express desde appjs.
var app = require('./app');
// se crea funcion para verificar que el puerto de servidor este "listen".
var port = process.env.PORT || 3004;

mongoose.connect('mongodb://localhost:27107/data/db/cursofavoritos', (err, res) => {

        console.log('Conexión a Mongodb correcta');
        app.listen(port, function(){
            console.log("API REST FAVORITOS funcionando en http://localhost:"+port);
        });


});

