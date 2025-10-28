import { Router } from "express";
import { DetallePedidoController } from "./detalle.controller.js";
import { validarDetalle } from "./detalle.validate.js";

const router = Router();
const detallePedidoController = new DetallePedidoController();

router.post('/detallepedido', validarDetalle, detallePedidoController.createDetallePedido.bind(detallePedidoController));
router.get('/detallepedido', detallePedidoController.getAll.bind(detallePedidoController));
router.get('/detallepedido/:_id', detallePedidoController.getDetallePedido.bind(detallePedidoController));
router.put('/detallepedido/:_id', validarDetalle, detallePedidoController.updateDetallePedido.bind(detallePedidoController));
router.delete('/detallepedido/:_id', detallePedidoController.deleteDetallePedido.bind(detallePedidoController));

export const detallePedidoRoutes = router;