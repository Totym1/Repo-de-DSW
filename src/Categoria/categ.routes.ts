import { Router } from "express";
import { CategoriaController } from "./categ.controller";

const categoriaController = new CategoriaController();

export function setRoutes(app: Router) {
  app.post('/categorias', categoriaController.createCategoria.bind(categoriaController));
  app.get('/categorias', categoriaController.getAll.bind(categoriaController));
  app.get('/categorias/:id', categoriaController.getCategoria.bind(categoriaController));
  app.put('/categorias/:id', categoriaController.updateCategoria.bind(categoriaController));
  app.delete('/categorias/:id', categoriaController.deleteCategoria.bind(categoriaController));
}