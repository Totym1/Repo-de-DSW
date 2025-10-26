import { Router } from "express";
import { CategoriaController } from "./categ.controller.js";
import { validarCategoria } from "./categ.validate.js";

const router = Router();
const categoriaController = new CategoriaController();

router.post('/categorias', validarCategoria, categoriaController.createCategoria.bind(categoriaController));
router.get('/categorias', categoriaController.getAll.bind(categoriaController));
router.get('/categorias/:_id', categoriaController.getCategoria.bind(categoriaController));
router.put('/categorias/:_id', validarCategoria, categoriaController.updateCategoria.bind(categoriaController));
router.delete('/categorias/:_id', categoriaController.deleteCategoria.bind(categoriaController));

export const categoriaRoutes = router;