'use strict'

import Categoria from '../models/categoria.js';

var categoriaController = {
    // Guardar una categoria
    saveCategoria: async (req, res) => {
        var params = req.body;
        var categoria = new Categoria({
        idCategoria: params.idCategoria,
        nombre: params.nombre,
        descripcion: params.descripcion
        });

        try {
            var categoriaStored = await categoria.save();
            res.status(201).send({ message: 'Categoria guardada correctamente', categoriaStored });
        } catch (error) {
            res.status(500).send({ message: 'Error al guardar la categoria', error });
        }
    },
       
    // Obtener todas las categorias ordenadas por su id
    getCategorias: async (req, res) => {
    try {
      const categorias = await Categoria.find().sort('idCategoria').exec();
      if (!categorias || categorias.length === 0) {
        return res.status(404).send({ message: 'No se encontraron categorias' });
      }
      res.status(200).send({ categorias });
    } catch (err) {
      res.status(500).send({ message: 'Error al obtener las categorias', error: err });
    }
  },

    // Eliminar una categoria por su id
    deleteCategoria: async (req, res) => {
        var idCategoria = req.params.id;
        try {
            var deletedCategoria = await Categoria.findByIdAndDelete(idCategoria);
            if (!deletedCategoria) {
                return res.status(404).send({ message: "Categoria no encontrada"});
            }
            res.status(200).send({ message: "Categoria eliminada correctamente"});
        } catch (error) {
            res.status(500).send({ message: "Error al eliminar la categoria", error });
        }
    },

    //Actualizar una categoria por su id
    updateCategoria: async (req, res) => {
        var idCategoria = req.params.id;
        var updateData = req.body;
        try {
            var updatedCategoria = await Categoria.findByIdAndUpdate(
                idCategoria,
                updateData,
                { new: true }
            );
            if (!updatedCategoria) {
                return res.status(404).send({ message: "Categoria no encontrada" });
            }
            res.status(200).send({ message: "Categoria actualizada correctamente", updatedCategoria });
        } catch (error) {
            res.status(500).send({ message: "Error al actualizar la categoria", error });
        }
    }
}

export default categoriaController;
