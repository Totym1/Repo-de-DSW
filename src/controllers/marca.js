'use strict'

import Marca from '../models/marca.js';

var MarcaController = {
  // Guardar una marca
  saveMarca: async (req, res) => {
    var params = req.body;
    var marca = new Marca({
      idMarca: params.idMarca,
      nombre: params.nombre,
      descripcion: params.descripcion
    });

    try {
      var savedmarca = await marca.save();
      res.status(201).send({ message: 'Marca guardada correctamente', savedmarca });
    } catch (error) {
      res.status(500).send({ message: 'Error al guardar la marca', error });
    }
  },

  // Obtener todas las marcas ordenadas por idMarca
  getMarcaById: async (req, res) => {
    try {
      const marcas = await Marca.find().sort('idMarca').exec();
      if (!marcas || marcas.length === 0) {
        return res.status(404).send({ message: 'No se encontraron marcas' });
      }
      res.status(200).send({ marcas });
    } catch (err) {
      res.status(500).send({ message: 'Error al obtener las marcas', error: err });
    }
  },

  // Eliminar una marca por ID
  deleteMarca: async (req, res) => {
    var marcaId = req.params.id;
    try {
      var deletedmarca = await Marca.findByIdAndDelete(marcaId);
      if (!deletedmarca) {
        return res.status(404).send({ message: 'Marca no encontrada' });
      }
      res.status(200).send({ message: 'Marca eliminada correctamente' });
    } catch (error) {
      res.status(500).send({ message: 'Error al eliminar la marca', error });
    }
  },

  // Actualizar una marca por ID
  updateMarca: async (req, res) => {
    var marcaId = req.params.id;
    var updateData = req.body;
    try {
      var updatedmarca = await Marca.findByIdAndUpdate(
        marcaId,
        updateData,
        { new: true }
      );
      if (!updatedmarca) {
        return res.status(404).send({ message: 'Marca no encontrada' });
      }
      res.status(200).send({ message: 'Marca actualizada correctamente', updatedmarca });
    } catch (error) {
      res.status(500).send({ message: 'Error al actualizar la marca', error });
    }
  }
}

export default MarcaController;
