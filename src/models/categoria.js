'use strict'

import mongoose from 'mongoose';
var schema = mongoose.Schema;

var categoriaSchema = new schema({
  idCategoria: Number,
  nombre: String,
  descripcion: String
});

export default mongoose.model('Categoria', categoriaSchema);