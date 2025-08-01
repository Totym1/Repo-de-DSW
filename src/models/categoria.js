'use strict'

import mongoose from 'mongoose';
var schema = mongoose.Schema;

var categoriaSchema = new schema({
  idCategoria: Number,
  nombre: String,
  descripcion: String
});

module.exports = mongoose.model('Categoria', categoriaSchema);