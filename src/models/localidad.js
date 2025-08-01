'use strict'

import mongoose from 'mongoose';
var schema = mongoose.Schema;

var LocalidadSchema = new schema({
  codPostal: Number,
  ciudad: String
});

module.exports = mongoose.model('Localidad', LocalidadSchema);
