import { Router } from "express";
import { DireccionController } from "./direc.controller.js";

const router = Router();
const direccionController = new DireccionController();

router.post('/direcciones', direccionController.createDireccion.bind(direccionController));
router.get('/direcciones', direccionController.getAll.bind(direccionController));
router.get('/direcciones/:_id', direccionController.getDireccion.bind(direccionController));
router.put('/direcciones/:_id', direccionController.updateDireccion.bind(direccionController));
router.delete('/direcciones/:_id', direccionController.deleteDireccion.bind(direccionController));

export const direccionRoutes = router;