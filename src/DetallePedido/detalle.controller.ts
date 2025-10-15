import { Request, Response } from "express";
import { DetallePedido, typeDetallePedido } from "./detalle.model.js";

export class DetallePedidoController {
  public async createDetallePedido(req: Request, res: Response): Promise<void> {
    try {
      const newDetallePedido: typeDetallePedido = new DetallePedido(req.body);
      await newDetallePedido.save();
      res.status(201).json({ message: "Detalle de pedido guardado correctamente!", newDetallePedido });
    } catch (error) {
      res.status(500).json({ message: "Error al crear el detalle de pedido", error });
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const detallesPedido: typeDetallePedido[] = await DetallePedido.find()
        .populate("pedido")
        .populate("indumentaria");
      res.status(200).json(detallesPedido);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los detalles de pedido", error });
    }
  }
  
  public async getDetallePedido(req: Request, res: Response): Promise<void> {
    try {
      const detallePedido: typeDetallePedido | null = await DetallePedido.findById(req.params._id)
        .populate("pedido")
        .populate("indumentaria");
      if (detallePedido) {
        res.status(200).json(detallePedido);
      } else {
        res.status(404).json({ message: "Detalle de pedido no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el detalle de pedido", error });
    }
  }

  public async updateDetallePedido(req: Request, res: Response): Promise<void> {
    try {
      const detallePedidoUpdated: typeDetallePedido | null = await DetallePedido.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      if (detallePedidoUpdated) {
        res.status(200).json({ message: "Detalle de pedido actualizado correctamente!", detallePedidoUpdated });
      } else {
        res.status(404).json({ message: "Detalle de pedido no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el detalle de pedido", error });
    }
  }

  public async deleteDetallePedido(req: Request, res: Response): Promise<void> {
    try {
      const deletedDetallePedido: typeDetallePedido | null = await DetallePedido.findByIdAndDelete(req.params._id);
      if (deletedDetallePedido) {
        res.status(200).json({ message: "Detalle de pedido eliminado correctamente!", deletedDetallePedido });
      } else {
        res.status(404).json({ message: "Detalle de pedido no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el detalle de pedido", error });
    }
  }
}
