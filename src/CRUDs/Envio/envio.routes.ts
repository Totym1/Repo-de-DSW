import { Router } from 'express';
import { EnvioController } from './envio.controller.js';

const router = Router();
const envioController = new EnvioController();

router.post('/envios', envioController.createEnvio.bind(envioController));
router.get('/envios', envioController.getAll.bind(envioController));
router.get('/envios/:_id', envioController.getEnvio.bind(envioController));
router.put('/envios/:_id', envioController.updateEnvio.bind(envioController));
router.delete('/envios/:_id', envioController.deleteEnvio.bind(envioController));

export const envioRoutes = router;
