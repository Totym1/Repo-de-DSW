import { Router } from "express";
import { UsuarioController } from "./usu.controller.js";
import { validarUsuario } from "./usu.validate.js";
import { authMiddleware } from "../../auth/auth.middleware.js";
import { authorize } from "../../auth/role.middleware.js";

const router = Router();
const usuarioController = new UsuarioController();

router.get('/usuarios', usuarioController.getAll.bind(usuarioController));
router.get('/usuarios/:_id' , authMiddleware, authorize(['admin', "cliente"]), usuarioController.getMe.bind(usuarioController));
router.put('/usuarios/:_id' , authMiddleware, authorize(["cliente"]), validarUsuario, usuarioController.updateMe.bind(usuarioController));
router.delete('/usuarios/:_id' , authMiddleware, authorize(['cliente']), usuarioController.deleteMe.bind(usuarioController));

export const usuarioRoutes = router;