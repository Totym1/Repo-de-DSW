import mongoose, { Schema, Document } from "mongoose";
import { typePedido } from "../Pedido/pedi.model.js";
import { typeIndumentaria } from "../Indumentaria/indu.model.js";

export interface typeDetallePedido extends Document {
  pedido: typePedido["_id"];
  indumentaria: typeIndumentaria["_id"];
  cantidad: number;
  precioUnitario: number;
}

const DetallePedidoSchema = new Schema<typeDetallePedido>({
  pedido: { type: Schema.Types.ObjectId, ref: "Pedido", required: true },
  indumentaria: { type: Schema.Types.ObjectId, ref: "Indumentaria", required: true },
  cantidad: { type: Number, required: true },
  precioUnitario: { type: Number, required: true },
});

export const DetallePedido = mongoose.model<typeDetallePedido>("DetallePedido", DetallePedidoSchema);