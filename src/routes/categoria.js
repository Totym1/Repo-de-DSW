'use strict'

import express from "express";
import Categoria from "../controllers/categoria.js";

const router = express.Router();

// Guardar una Categoria
router.post('/save', Categoria.saveCategoria);

// Obtener todas las Categorias
router.get('/categorias', Categoria.getCategorias);

// Eliminar una Categoria por ID
router.delete('/delete/:id', Categoria.deleteCategoria);

// Actualizar una Categoria por ID
router.put('/update/:id', Categoria.updateCategoria);

export default router;