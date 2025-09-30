import { Router } from "express";
import { CategoriaController } from "./categ.controller.js";

const router = Router();
const categoriaController = new CategoriaController();

router.post('/categorias', categoriaController.createCategoria.bind(categoriaController));
router.get('/categorias', categoriaController.getAll.bind(categoriaController));
router.get('/categorias/:_id', categoriaController.getCategoria.bind(categoriaController));
router.put('/categorias/:_id', categoriaController.updateCategoria.bind(categoriaController));
router.delete('/categorias/:_id', categoriaController.deleteCategoria.bind(categoriaController));

  export const categoriaRoutes = router;