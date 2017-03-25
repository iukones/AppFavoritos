// aqui se escribe toda la confurguracion de Espress y sus rutas.
'use strict'
// creamos variables para importar express y body-parser.
var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/favorito');
// creamos variables para hacer el llamado de express y asignar puerto de servidor NodeJS.
var app = express();

// se formatea toda peticion via url con urlencoded.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api', api);
// creamos un modulo exportable para ser llamado desde otro archivo.
module.exports = app;
