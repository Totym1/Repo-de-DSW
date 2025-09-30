import { Router } from "express";
import { CategoriaController } from "./categ.controller.js";

const router = Router();
const categoriaController = new CategoriaController();

router.post('/categorias', categoriaController.createCategoria.bind(categoriaController));
router.get('/categorias', categoriaController.getAll.bind(categoriaController));
router.get('/categorias/:id', categoriaController.getCategoria.bind(categoriaController));
router.put('/categorias/:id', categoriaController.updateCategoria.bind(categoriaController));
router.delete('/categorias/:id', categoriaController.deleteCategoria.bind(categoriaController));

  export const categoriaRoutes = router;