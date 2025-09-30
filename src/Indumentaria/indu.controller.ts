import { Request, Response } from 'express';
import { Indumentaria, typeIndumentaria } from './indu.model.js';

export class IndumentariaController {
    public async createIndumentaria(req: Request, res: Response): Promise<void> {
      try { 
        const newIndumentaria: typeIndumentaria = new Indumentaria(req.body);
        await newIndumentaria.save();
        res.status(201).json({ message: 'Indumentaria guardada correctamente!', newIndumentaria});
      } catch (error) {
        res.status(500).json({ message: 'Error al crear la indumentaria', error });
      }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
      try {
        const indumentarias: typeIndumentaria[] = await Indumentaria.find()
          .populate('categoria', 'nombre descripcion')
          .populate('marca', 'nombre descripcion');
        res.status(200).json(indumentarias);
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener las Indumentarias', error });
      }
    }

    public async getIndumentaria(req: Request, res: Response): Promise<void> {
      try {
        const indumentaria: typeIndumentaria | null = await Indumentaria.findById(req.params._id)
          .populate('categoria', 'nombre descripcion')
          .populate('marca', 'nombre descripcion');
        if (indumentaria) {
            res.status(200).json(indumentaria);
        } else {
            res.status(404).json({ message: 'Indumentaria no encontrada' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener la indumentaria', error });
      }
    }

    public async updateIndumentaria(req: Request, res: Response): Promise<void> {
      try {
        const indumentariaUpdated: typeIndumentaria | null = await Indumentaria.findByIdAndUpdate(
            req.params._id,
            req.body,
            { new: true }
        );
        if (indumentariaUpdated) {
            res.status(200).json({ message: 'Indumentaria actualizada correctamente!', indumentariaUpdated });
        } else {
            res.status(404).json({ message: 'Indumentaria no encontrada' })
          }
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la indumentaria', error });
      }
    }

    public async deleteIndumentaria(req: Request, res: Response): Promise<void> {
        try {
            const deletedIndumentaria: typeIndumentaria | null = await Indumentaria.findByIdAndDelete(req.params._id);
            if (deletedIndumentaria) {
                res.status(200).json({ message: 'Indumentaria eliminada correctamente!' });
            } else {
                res.status(404).json({ message: 'Indumentaria no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar la indumentaria', error });
        }
    }
}