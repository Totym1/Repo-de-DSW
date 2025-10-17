import { Request, Response } from 'express';
import { Direccion, typeDireccion } from './direc.model.js';

export class DireccionController {
    public async createDireccion(req: Request, res: Response): Promise<void> {
      try { 
        const newDireccion: typeDireccion = new Direccion(req.body);
        await newDireccion.save();
        res.status(201).json({ message: 'Direccion guardada correctamente!', newDireccion});
      } catch (error) {
        res.status(500).json({ message: 'Error al crear la direccion', error });
      }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
      try {
        const direcciones: typeDireccion[] = await Direccion.find();
        res.status(200).json(direcciones);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener las direcciones', error });
      }
    }
    public async getDireccion(req: Request, res: Response): Promise<void> {
      try {
        const direccion: typeDireccion | null = await Direccion.findById(req.params._id);
        if (direccion) {
            res.status(200).json(direccion);
        } else {
            res.status(404).json({ message: 'Direccion no encontrada' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener la direccion', error });
      }
    }

    public async updateDireccion(req: Request, res: Response): Promise<void> {
      try {
        const direccionUpdated: typeDireccion | null = await Direccion.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
        );
        if (direccionUpdated) {
            res.status(200).json({ message: 'Direccion actualizada correctamente!', direccionUpdated });
        } else {
            res.status(404).json({ message: 'Direccion no encontrada' })
          }
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la direccion', error });
      }
    }

    public async deleteDireccion(req: Request, res: Response): Promise<void> {
        try {
            const deletedDireccion: typeDireccion | null = await Direccion.findByIdAndDelete(req.params._id);
            if (deletedDireccion) {
                res.status(200).json({ message: 'Direccion eliminada correctamente!' });
            } else {
                res.status(404).json({ message: 'Direccion no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la direccion', error });
        }
    }
}