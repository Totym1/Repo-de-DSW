import { Request, Response } from 'express';
import { Localidad, typeLocalidad } from './local.model.js';

export class LocalidadController {
    public async createLocalidad(req: Request, res: Response): Promise<void> {
      try { 
        const newLocalidad: typeLocalidad = new Localidad(req.body);
        await newLocalidad.save();
        res.status(201).json({ message: 'Localidad guardada correctamente!', newLocalidad});
      } catch (error) {
        res.status(500).json({ message: 'Error al crear la localidad', error });
      }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
      try {
        const localidades: typeLocalidad[] = await Localidad.find();
        res.status(200).json(localidades);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener las localidades', error });
      }
    }
    public async getLocalidad(req: Request, res: Response): Promise<void> {
      try {
        const localidad: typeLocalidad | null = await Localidad.findById(req.params._id);
        if (localidad) {
            res.status(200).json(localidad);
        } else {
            res.status(404).json({ message: 'Localidad no encontrada' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener la localidad', error });
      }
    }

    public async updateLocalidad(req: Request, res: Response): Promise<void> {
      try {
        const localidadUpdated: typeLocalidad | null = await Localidad.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
        );
        if (localidadUpdated) {
            res.status(200).json({ message: 'Localidad actualizada correctamente!', localidadUpdated });
        } else {
            res.status(404).json({ message: 'Localidad no encontrada' })
          }
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la localidad', error });
      }
    }

    public async deleteLocalidad(req: Request, res: Response): Promise<void> {
        try {
            const deletedLocalidad: typeLocalidad | null = await Localidad.findByIdAndDelete(req.params._id);
            if (deletedLocalidad) {
                res.status(200).json({ message: 'Localidad eliminada correctamente!' });
            } else {
                res.status(404).json({ message: 'Localidad no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la localidad', error });
        }
    }
}