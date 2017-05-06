'use strict'

const Image = require('../models/imageModels')
const Album = require('../models/albumModels')


function pruebas(req, res) {
  res.status(200).send({message: `Pruebas de controlador de imagenes`})

}

module.exports = {
  pruebas
}
