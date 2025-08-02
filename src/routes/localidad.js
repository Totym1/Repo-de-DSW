'use strict'

import express from "express";
import Localidad from "../controllers/localidad.js";
import router from express.Router();

// Guardar una localidad
router.post('/save', Localidad.saveLocalidad);

// Obtener todas las localidades
router.get('/localidades', Localidad.getlocalidadById);

// Eliminar una localidad por ID
router.delete('/delete/:id', Localidad.deleteLocalidad);

// Actualizar una localidad por ID
router.put('/update/:id', Localidad.updateLocalidad);

module.exports = router;