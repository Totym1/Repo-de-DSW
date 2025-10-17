import { Request, Response } from 'express';
import { Envio, typeEnvio } from './envio.model.js';

export class EnvioController {
    public async createEnvio(req: Request, res: Response): Promise<void> {
        try {
            const newEnvio: typeEnvio = new Envio(req.body);
            await newEnvio.save();
            res.status(201).json({ message: 'Envío creado correctamente!', newEnvio });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el envío', error });
        }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
        try {
            const envios: typeEnvio[] = await Envio.find()
              .populate('pedido')
              .populate('direccion');
            res.status(200).json(envios);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los envíos', error });
        }
    }

    public async getEnvio(req: Request, res: Response): Promise<void> {
        try {
            const envio: typeEnvio | null = await Envio.findById(req.params._id)
                .populate('pedido')
                .populate('direccion');
            if (envio) {
                res.status(200).json(envio);
            } else {
                res.status(404).json({ message: 'Envío no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el envío', error });
        }
    }

    public async updateEnvio(req: Request, res: Response): Promise<void> {
        try {
            const envioUpdated: typeEnvio | null = await Envio.findByIdAndUpdate(
                req.params._id,
                req.body,
                { new: true }
            ); 
            if (envioUpdated) {
                res.status(200).json({ message: 'Envío actualizado correctamente!', envioUpdated });
            } else {
                res.status(404).json({ message: 'Envío no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el envío', error });
        }
    }
    
    public async deleteEnvio(req: Request, res: Response): Promise<void> {
        try {
            const deletedEnvio: typeEnvio | null = await Envio.findByIdAndDelete(req.params._id);
            if (deletedEnvio) {
                res.status(200).json({ message: 'Envío eliminado correctamente!', deletedEnvio });
            } else {
                res.status(404).json({ message: 'Envío no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el envío', error });
        }
    }
}
