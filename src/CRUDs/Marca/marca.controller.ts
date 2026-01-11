import { Request, Response } from 'express';
import { Marca, typeMarca } from './marca.model.js';

export class MarcaController {
    public async createMarca(req: Request, res: Response): Promise<void> {
      try { 
        const newMarca: typeMarca = new Marca(req.body);
        await newMarca.save();
        res.status(201).json({ message: 'Marca guardada correctamente!', newMarca});
      } catch (error) {
        res.status(500).json({ message: 'Error al crear la marca', error });
      }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
      try {
        const marcas: typeMarca[] = await Marca.find();
        res.status(200).json(marcas);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener las marcas', error });
      }
    }

    public async getMarca(req: Request, res: Response): Promise<void> {
      try {
        const marca: typeMarca | null = await Marca.findById(req.params._id);
        if (marca) {
            res.status(200).json(Marca);
        } else {
            res.status(404).json({ message: 'Marca no encontrada' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener la marca', error });
      }
    }

    public async updateMarca(req: Request, res: Response): Promise<void> {
      try {
        const marcaUpdated: typeMarca | null = await Marca.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
        );
        if (marcaUpdated) {
            res.status(200).json({ message: 'Marca actualizada correctamente!', marcaUpdated });
        } else {
            res.status(404).json({ message: 'Marca no encontrada' })
          }
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la marca', error });
      }
    }

    public async deleteMarca(req: Request, res: Response): Promise<void> {
        try {
            const deletedMarca: typeMarca | null = await Marca.findByIdAndDelete(req.params._id);
            if (deletedMarca) {
                res.status(200).json({ message: 'Marca eliminada correctamente!' });
            } else {
                res.status(404).json({ message: 'Marca no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la marca', error });
        }
    }
}