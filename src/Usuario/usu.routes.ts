import { Router } from "express";
import { UsuarioController } from "./usu.controller.js";
import { validarUsuario } from "./usu.validate.js";

const router = Router();
const usuarioController = new UsuarioController();

router.post('/usuarios', validarUsuario, usuarioController.createUsuario.bind(usuarioController));
router.get('/usuarios', usuarioController.getAll.bind(usuarioController));
router.get('/usuarios/:_id', usuarioController.getUsuario.bind(usuarioController));
router.put('/usuarios/:_id', validarUsuario, usuarioController.updateUsuario.bind(usuarioController));
router.delete('/usuarios/:_id', usuarioController.deleteUsuario.bind(usuarioController));

export const usuarioRoutes = router;