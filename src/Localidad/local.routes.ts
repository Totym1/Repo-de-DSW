import { Router } from "express";
import { LocalidadController } from "./local.controller.js";

const router = Router();
const localidadController = new LocalidadController();

router.post('/localidades', localidadController.createLocalidad.bind(localidadController));
router.get('/localidades', localidadController.getAll.bind(localidadController));
router.get('/localidades/:_id', localidadController.getLocalidad.bind(localidadController));
router.put('/localidades/:_id', localidadController.updateLocalidad.bind(localidadController));
router.delete('/localidades/:_id', localidadController.deleteLocalidad.bind(localidadController));

export const localidadRoutes = router;