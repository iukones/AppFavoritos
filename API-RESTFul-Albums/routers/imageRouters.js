'use strict'

const express = require('express')
const ImageCtrl = require('../controllers/imageControllers')
const api = express.Router()


// peticion tipo GET a album
api.get('/prueba-image', ImageCtrl.pruebas)
// peticion tipo GET especifica al elemento albumId
// api.get('/album/:albumId', AlbumCtrl.getAlbum)
// peticion tipo POST a album
// api.post('/album', AlbumCtrl.saveAlbum)
// peticion tipo PUT para actualizar albumId
// api.put('/album/:albumId', AlbumCtrl.updateAlbum)
// peticion tipo DELETE a product en base de datos.
// api.delete('/album/:albumId', AlbumCtrl.deleteAlbum)




module.exports = api
