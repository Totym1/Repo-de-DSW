'use strict'

import Localidad from '../models/localidad.js';

var LocalidadController = {
  // Guardar una localidad
  saveLocalidad: async (req, res) => {
    var params = req.body;
    var localidad = new Localidad({
      codPostal: params.codPostal,
      ciudad: params.ciudad
    });

    try {
      var savedLocalidad = await localidad.save();
      res.status(201).send({ message: 'Localidad guardada correctamente', savedLocalidad });
    } catch (error) {
      res.status(500).send({ message: 'Error al guardar la localidad', error });
    }
  },

  // Obtener todas las localidades ordenadas por codPostal
  getlocalidadById: async (req, res) => {
    try {
      const localidades = await Localidad.find().sort('codPostal').exec();
      if (!localidades || localidades.length === 0) {
        return res.status(404).send({ message: 'No se encontraron localidades' });
      }
      res.status(200).send({ localidades });
    } catch (err) {
      res.status(500).send({ message: 'Error al obtener las localidades', error: err });
    }
  },

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
    try {
      var updatedLocalidad = await Localidad.findByIdAndUpdate(
        localidadId,
        updateData,
        { new: true }
      );
      if (!updatedLocalidad) {
        return res.status(404).send({ message: 'Localidad no encontrada' });
      }
      res.status(200).send({ message: 'Localidad actualizada correctamente', updatedLocalidad });
    } catch (error) {
      res.status(500).send({ message: 'Error al actualizar la localidad', error });
    }
  }
}

export default LocalidadController;
