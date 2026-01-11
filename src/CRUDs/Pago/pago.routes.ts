import { Router } from 'express';
import { PagoController } from './pago.controller.js';

const router = Router();
const pagoController = new PagoController();

router.post('/pagos', pagoController.createPago.bind(pagoController));
router.get('/pagos', pagoController.getAll.bind(pagoController));
router.get('/pagos/:_id', pagoController.getPago.bind(pagoController));
router.put('/pagos/:_id', pagoController.updatePago.bind(pagoController));
router.delete('/pagos/:_id', pagoController.deletePago.bind(pagoController));

export const pagoRoutes = router;