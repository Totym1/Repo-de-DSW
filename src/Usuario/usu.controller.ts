import { Request, Response } from 'express';
import { Usuario, typeUsuario } from './usu.model.js';

export class UsuarioController {
    public async createUsuario(req: Request, res: Response): Promise<void> {
      try { 
        const newUsuario: typeUsuario = new Usuario(req.body);
        await newUsuario.save();
        res.status(201).json({ message: 'Usuario guardado correctamente!', newUsuario});
      } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
      }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
      try {
        const usuarios: typeUsuario[] = await Usuario.find()
          .populate('localidad', 'codPostal ciudad');
        res.status(200).json(usuarios);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
      }
    }
    
    public async getUsuario(req: Request, res: Response): Promise<void> {
      try {
        const usuario: typeUsuario | null = await Usuario.findById(req.params._id)
          .populate('localidad', 'codPostal ciudad');
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
      }
    }

    public async updateUsuario(req: Request, res: Response): Promise<void> {
      try {
        const usuarioUpdated: typeUsuario | null = await Usuario.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
        );
        if (usuarioUpdated) {
            res.status(200).json({ message: 'Usuario actualizado correctamente!', usuarioUpdated });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' })
          }
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
      }
    }

    public async deleteUsuario(req: Request, res: Response): Promise<void> {
        try {
            const deletedUsuario: typeUsuario | null = await Usuario.findByIdAndDelete(req.params._id);
            if (deletedUsuario) {
                res.status(200).json({ message: 'Usuario eliminado correctamente!', deletedUsuario });
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el usuario', error });
        }
    }
}
