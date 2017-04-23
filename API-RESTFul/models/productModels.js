'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavoritoSchema = Schema({
    name: String,
    picture: String,
    price: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ['computers', 'phones', 'accesories']
    },
    description: String,
    url: String
})

module.exports = mongoose.model('Favorito', FavoritoSchema)
