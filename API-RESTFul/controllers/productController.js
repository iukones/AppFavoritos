'use strict'

const Favorito = require('../models/productModels')


function getFavorito(req, res) {

    let favoritosId = req.params.favoritosId

    Favorito.findById(favoritosId, (err, favorito) => {
        if (err) return res.status(500).send({
            message: `Error al realizar la petición: ${err}`
        })
        if (!favorito) return res.status(404).send({
            message: `El producto no se donde putas quedo`
        })
        res.status(200).send({favorito})
    })
}

function getFavoritos(req, res) {
    Favorito.find({}, (err, favoritos) => {
        if (err) return res.status(500).send({
            message: `Error al realizar la petición: ${err}`
        })
        if (!favoritos) return res.status(404).send({
            message: `Los productos no existen`
        })
        res.status(200).send({ favoritos })
    })
}


function saveFavorito(req, res) {
    console.log('POST /api/favorito')
    console.log(req.body)

    let favorito = new Favorito()
    favorito.name = req.body.name
    favorito.picture = req.body.picture
    favorito.price = req.body.price
    favorito.category = req.body.category
    favorito.description = req.body.description
    favorito.url = req.body.url

    favorito.save((err, favoritoStored) => {
        if (err) res.status(500).send({
            message: `Error al guardar en la base de datos: ${err}`
        })

        res.status(200).send({
            favorito: favoritoStored
        })
    })

}


function updateFavorito(req, res) {
    let favoritosId = req.params.favoritosId
    let update = req.body

    Favorito.findByIdAndUpdate(favoritosId, update, (err, favoritoUpdated) => {
        if (err) res.status(500).send({
            message: `Error al actualizar el producto: ${err}`
        })

        res.status(200).send({
            favorito: favoritoUpdated
        })
    })

}


function deleteFavorito(req, res) {
    let favoritosId = req.params.favoritosId

    Favorito.findById(favoritosId, (err, favorito) => {
        if (err) res.status(500).send({
            message: `Error al borrar el producto: ${err}`
        })

        favorito.remove(err => {
            if (err) res.status(500).send({
                message: `Error al borrar el producto: ${err}`
            })
            res.status(200).send({
                message: 'El producto ha sido eliminado'
            })

        })
    })

}

module.exports = {
    getFavoritos,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}
