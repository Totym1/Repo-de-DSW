'use strict'

import mongoose from 'mongoose';
var schema = mongoose.Schema;

var marcaSchema = new schema({
  idMarca: Number,
  nombre: String,
  descripcion: String
});

export default mongoose.model('Marca', marcaSchema);