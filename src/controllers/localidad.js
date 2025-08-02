'use strict'

import Localidad from '../models/localidad.js';

var LocalidadController = {
  // Guardar una localidad
  saveLocalidad: async (req, res) => {
    var params = req.body;
    var localidad = new Localidad();

    localidad.codPostal = params.codPostal;
    localidad.ciudad = params.ciudad;

    try {
      var savedLocalidad = await localidad.save();
      res.status(201).send({ message: 'Localidad guardada correctamente', savedLocalidad });
    } catch (error) {
      res.status(500).send({ message: 'Error al guardar la localidad', error });
    }
  },


  getlocalidadById: async (req, res) => {
      var query = localidad.find();

      query.sort('codPostal').exec((err, localidades) => {
        if (err) {
          return res.status(500).send({ message: 'Error al obtener las localidades', error: err });
        }
        if (!localidades) {
          return res.status(404).send({ message: 'No se encontraron localidades' });
        }
        return res.status(200).send({ localidades });
      })},
  
// Eliminar una localidad por ID
  deleteLocalidad: async (req, res) => {
    var localidadId = req.params.id;
    try {
      var deletedLocalidad = await Localidad.findByIdAndDelete(localidadId);
      if (!deletedLocalidad) {
        return res.status(404).send({ message: 'Localidad no encontrada' });
      }
      res.status(200).send({ message: 'Localidad eliminada correctamente' });
    } catch (error) {
      res.status(500).send({ message: 'Error al eliminar la localidad', error });
    }
    },
// Actualizar una localidad por ID
  updateLocalidad: async (req, res) => {
  var localidadId = req.params.id;
  var updateData = req.body;
  const codPostal = params.codPostal;
  const ciudad = params.ciudad;
  try {
    var updatedLocalidad = await Localidad.findByIdAndUpdate(localidadId, updateData, {codPostal: codPostal, ciudad: ciudad}, { new: true });
    if (!updatedLocalidad) {
      return res.status(404).send({ message: 'Localidad no encontrada' });
    }
    res.status(200).send({ message: 'Localidad actualizada correctamente', updatedLocalidad });
  } catch (error) {
    res.status(500).send({ message: 'Error al actualizar la localidad', error });
    }
  }
}

module.exports = LocalidadController;

;