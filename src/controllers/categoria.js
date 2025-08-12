'use strict'

var categoria = require('../models/note')

//Objeto controller para disponer de todas las funciones de ruta de la app

var categoriaController = {

    // Guardar una categoria
    save: (req, res) => {
        var params = req.body;
        var categoria = new categoria();

        categoria.idCategoria = params.idCategoria;
        categoria.nombre = params.nombre;
        categoria.descripcion = params.descripcion;

        categoria.save((err, categoriaStored) => {

            //Sucedio un error al guardar
            if (err, categoriaStored) {
                return res.status(500).send({ message: 'Error al guardar la categoria', error: err });
            }
            //Se guardo correctamente
            return res.status(200).send({ status: 'Exito', categoriaStored });
        })},

    // Obtener una categoria por su id
    getCategoria: (req, res) => {
        var queryID = categoria.find({});

        queryID.sort({ _nombre: 1, _descripcion: 1 }).exec((err, categoriaStored) => {

            //Sucedio un error al obtener la categoria
            if (err) {
                return res.status(500).send({ message: 'Error al obtener la categoria', error: err });
            }
            //No se encontro la categoria
            if (!categoriaStored) {
                return res.status(404).send({ message: 'Categoria no encontrada', error: err });
            }
            //Se encontro la categoria
            return res.status(200).send({ status: 'Exito', categoriaStored });
        })
    },

    // Eliminar una categoria por su id
    deleteCategoria: (req, res) => {
        var idCategoria = req.params.idCategoria;

        categoria.findOneAndDelete(idCategoria, (err, categoriaDeleted) => {
            //Sucedio un error al eliminar la categoria
            if (err) {
                return res.status(500).send({ message: 'Error al eliminar la categoria', error: err });
            }
            //No se encontro la categoria
            if (!categoriaDeleted) {
                return res.status(404).send({ message: 'Categoria no encontrada', error: err });
            }
            //Se elimino correctamente la categoria
            return res.status(200).send({ status: 'Exito', categoriaDeleted });
        })
    },

    //Actualizar una categoria por su id
    update: (req, res) => {
        var idCategoria = req.params.idCategoria;
        var params = req.body.params;
        const nombre = params.nombre;
        const descripcion = params.descripcion;

        categoria.findOneAndUpdate(idCategoria, { nombre: nombre, descripcion: descripcion }, { new: true }, (err, categoriaUpdated) => {
            //Sucedio un error al actualizar la categoria
            if (err) {
                return res.status(500).send({ message: 'Error al actualizar la categoria', error: err });
            }
            //No se encontro la categoria
            if (!categoriaUpdated) {
                return res.status(404).send({ message: 'Categoria no encontrada', error: err });
            }
            //Se actualizo correctamente la categoria
            return res.status(200).send({ status: 'Exito', categoriaUpdated });
        })
    }
}

module.exports = categoriaController;