import { Request, Response } from 'express';
import { Pedido, typePedido } from './pedi.model.js';

export class PedidoController {
    public async createPedido(req: Request, res: Response): Promise<void> {
      try { 
        const newPedido: typePedido = new Pedido(req.body);
        await newPedido.save();
        res.status(201).json({ message: 'Pedido guardado correctamente!', newPedido});
      } catch (error) {
        res.status(500).json({ message: 'Error al crear el pedido', error });
      }
    }

    public async getAll(req: Request, res: Response): Promise<void> {
      try {
        const pedidos: typePedido[] = await Pedido.find()
          .populate('usuario', 'nombre apellido email')
        res.status(200).json(pedidos);
            } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos', error });
      }
    }

    public async getPedido(req: Request, res: Response): Promise<void> {
      try {
        const pedido: typePedido | null = await Pedido.findById(req.params._id)
          .populate('usuario', 'nombre apellido email')
        if (pedido) {
          res.status(200).json(pedido);
        } else {
          res.status(404).json({ message: 'Pedido no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al obtener el pedido', error });
      }
    }

    public async updatePedido(req: Request, res: Response): Promise<void> {
      try {
        const updatedPedido: typePedido | null = await Pedido.findByIdAndUpdate(
          req.params._id,
          req.body,
          { new: true }
        );
        if (updatedPedido) {
          res.status(200).json({ message: 'Pedido actualizado correctamente!', updatedPedido });
        } else {
          res.status(404).json({ message: 'Pedido no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el pedido', error });
      }
    }

    public async deletePedido(req: Request, res: Response): Promise<void> {
      try {
        const deletedPedido: typePedido | null = await Pedido.findByIdAndDelete(req.params._id);
        if (deletedPedido) {
          res.status(200).json({ message: 'Pedido eliminado correctamente!', deletedPedido });
        } else {
          res.status(404).json({ message: 'Pedido no encontrado' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pedido', error });
      }
    }
}
