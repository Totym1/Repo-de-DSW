'use strict'

import express from "express";
import Marca from "../controllers/marca.js";

const router = express.Router();

// Guardar una Marca
router.post('/save', Marca.saveMarca);

// Obtener todas las Marcas
router.get('/marcas', Marca.getMarcaById);

// Eliminar una Marca por ID
router.delete('/delete/:id', Marca.deleteMarca);

// Actualizar una Marca por ID
router.put('/update/:id', Marca.updateMarca);

export default router;