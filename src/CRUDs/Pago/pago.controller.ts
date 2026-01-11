import { Request, Response } from "express";
import { Pago, typePago } from "./pago.model.js";

export class PagoController {
    public async createPago(req: Request, res: Response): Promise<void> {
      try { 
        const newPago: typePago = new Pago(req.body);
        await newPago.save();
        res.status(201).json({ message: 'Pago guardado correctamente!', newPago});
      } catch (error) {
        res.status(500).json({ message: 'Error al crear el pago', error });
      }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
      try {
        const pagos: typePago[] = await Pago.find();
        res.status(200).json(pagos);
            } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pagos', error });
      }
    }

    public async getPago(req: Request, res: Response): Promise<void> {
      try {
        const pago: typePago | null = await Pago.findById(req.params._id);
        if (pago) {
          res.status(200).json(pago);
        } else {
          res.status(404).json({ message: 'Pago no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pago', error });
      }
    }

    public async updatePago(req: Request, res: Response): Promise<void> {
      try {
        const updatedPago: typePago | null = await Pago.findByIdAndUpdate(
          req.params._id,
          req.body,
          { new: true }
        );
        if (updatedPago) {
          res.status(200).json({ message: 'Pago actualizado correctamente!', updatedPago });
        } else {
          res.status(404).json({ message: 'Pago no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el pago', error });
      }
    }

    public async deletePago(req: Request, res: Response): Promise<void> {
      try {
        const deletedPago: typePago | null = await Pago.findByIdAndDelete(req.params._id);
        if (deletedPago) {
          res.status(200).json({ message: 'Pago eliminado correctamente!', deletedPago });
        } else {
          res.status(404).json({ message: 'Pago no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pago', error });
      }
    }
}
