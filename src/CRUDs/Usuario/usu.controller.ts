import { Request, Response } from 'express';
import { Usuario, typeUsuario } from './usu.model.js';
import { AuthRequest } from '../../auth/auth.middleware.js';

export class UsuarioController {
    public async getAll(req: Request, res: Response): Promise<void> {
      try {
        const usuarios: typeUsuario[] = await Usuario.find().select("-contraseña");
        res.status(200).json(usuarios);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
      }
    }
    
    public async getMe(req: AuthRequest, res: Response) {
      const usuario = await Usuario.findById(req.user!.id)
        .select("-contraseña");

      res.json(usuario);
    }

    public async updateMe(req: AuthRequest, res: Response) {
      const usuario = await Usuario.findByIdAndUpdate(
        req.user!.id,
        req.body,
        { new: true }
      ).select("-contraseña");

      res.json(usuario);
    }

    public async deleteMe(req: AuthRequest, res: Response) {
      await Usuario.findByIdAndDelete(req.user!.id);
      res.json({ message: "Usuario eliminado" });
    }
}
