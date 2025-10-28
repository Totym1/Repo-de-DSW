import { Router } from "express";
import { PedidoController } from "./pedi.controller.js";
import { validarPedido } from "./pedi.validate.js";

const router = Router();
const pedidoController = new PedidoController();

router.post('/pedidos', validarPedido, pedidoController.createPedido.bind(pedidoController));
router.get('/pedidos', pedidoController.getAll.bind(pedidoController));
router.get('/pedidos/:_id', pedidoController.getPedido.bind(pedidoController));
router.put('/pedidos/:_id', validarPedido, pedidoController.updatePedido.bind(pedidoController));
router.delete('/pedidos/:_id', pedidoController.deletePedido.bind(pedidoController));

export const pedidoRoutes = router;
