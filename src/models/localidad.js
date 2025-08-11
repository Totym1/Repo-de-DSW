'use strict'

import mongoose from 'mongoose';
var schema = mongoose.Schema;

var LocalidadSchema = new schema({
  codPostal: Number,
  ciudad: String
});

export default mongoose.model('Localidad', LocalidadSchema);
