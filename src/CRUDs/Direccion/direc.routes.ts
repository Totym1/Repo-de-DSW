import { Router } from "express";
import { DireccionController } from "./direc.controller.js";
import { validarDireccion } from "./direc.validate.js";

const router = Router();
const direccionController = new DireccionController();

router.post('/direcciones', validarDireccion, direccionController.createDireccion.bind(direccionController));
router.get('/direcciones', direccionController.getAll.bind(direccionController));
router.get('/direcciones/:_id', direccionController.getDireccion.bind(direccionController));
router.put('/direcciones/:_id', validarDireccion, direccionController.updateDireccion.bind(direccionController));
router.delete('/direcciones/:_id', direccionController.deleteDireccion.bind(direccionController));

export const direccionRoutes = router;