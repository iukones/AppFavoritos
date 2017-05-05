'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// se carga rutas
const api = require('./routers/albumRouters')

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

// configuramos cabeceras HTTP CORS etc, para acceder desde nuetra aplicación a nuestra API.


// rutas base
app.use('/api', api)

// exportar el modulo
module.exports = app
