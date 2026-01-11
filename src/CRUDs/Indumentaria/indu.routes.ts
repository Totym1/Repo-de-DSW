import { Router } from "express";
import { IndumentariaController } from "./indu.controller.js";
import { validarIndumentaria } from "./indu.validate.js";

const router = Router();
const indumentariaController = new IndumentariaController();

router.post('/indumentarias',  indumentariaController.createIndumentaria.bind(indumentariaController));
router.get('/indumentarias', indumentariaController.getAll.bind(indumentariaController));
router.get('/indumentarias/:_id', indumentariaController.getIndumentaria.bind(indumentariaController));
router.put('/indumentarias/:_id',   indumentariaController.updateIndumentaria.bind(indumentariaController));
router.delete('/indumentarias/:_id', indumentariaController.deleteIndumentaria.bind(indumentariaController));

export const indumentariaRoutes = router;