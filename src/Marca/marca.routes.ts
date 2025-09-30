import { Router } from "express";
import { MarcaController } from "./marca.controller.js";

const router = Router();
const marcaController = new MarcaController();

router.post('/marcas', marcaController.createMarca.bind(marcaController));
router.get('/marcas', marcaController.getAll.bind(marcaController));
router.get('/marcas/:_id', marcaController.getMarca.bind(marcaController));
router.put('/marcas/:_id', marcaController.updateMarca.bind(marcaController));
router.delete('/marcas/:_id', marcaController.deleteMarca.bind(marcaController));

  export const marcaRoutes = router;