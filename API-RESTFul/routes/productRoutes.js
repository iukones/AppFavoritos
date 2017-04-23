'use strict'

const express = require('express')
const favoritoCtrl = require('../controllers/productController')
const api = express.Router()

// app.get('/iukones/:name', (req, res) => {
//   res.send({ mensaje: `Hola ${req.params.name}!` })
// })

// peticion tipo GET a product
api.get('/favorito', favoritoCtrl.getFavoritos)
// peticion tipo GET especifica al elemento productId
api.get('/favorito/:favoritosId', favoritoCtrl.getFavorito)
// peticion tipo POST a product
api.post('/favorito', favoritoCtrl.saveFavorito)
// peticion tipo PUT para actualizar productId
api.put('/favorito/:favoritosId', favoritoCtrl.updateFavorito)
// peticion tipo DELETE a product en base de datos.
api.delete('/favorito/:favoritosId', favoritoCtrl.deleteFavorito)

module.exports = api
