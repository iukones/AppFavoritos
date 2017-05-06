'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// se carga rutas
const api = require('./routers/albumRouters')
const api_images = require('./routers/imageRouters')

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

// configuramos cabeceras HTTP CORS etc, para acceder desde nuetra aplicación a nuestra API.


// rutas base
app.use('/api', api)
app.use('/api', api_images)

// exportar el modulo
module.exports = app
