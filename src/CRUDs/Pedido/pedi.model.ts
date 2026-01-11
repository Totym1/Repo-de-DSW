import mongoose, { Schema, Document } from 'mongoose';
import { typeUsuario } from '../Usuario/usu.model.js';
import { typeIndumentaria } from '../Indumentaria/indu.model.js';
import { typeEnvio } from '../Envio/envio.model.js';
import { typePago } from '../Pago/pago.model.js';

interface typeDetallePedido {
    indumentaria: typeIndumentaria['_id'];
    cantidad: number;
    precioUnitario: number;
}

export interface typePedido extends Document {
    usuario: typeUsuario['_id'];
    fecha: Date;
    estado: "pendiente" | "completado" | "cancelado";
    detallePedido: typeDetallePedido[];
    pago?: typePago['_id'] | null;
    envio?: typeEnvio['_id'] | null;
}

const DetallePedidoSchema = new Schema<typeDetallePedido>({
  indumentaria: { type: Schema.Types.ObjectId, ref: 'Indumentaria', required: true },
  cantidad: { type: Number, required: true, min: 1 },
  precioUnitario: { type: Number, required: true }
});

const PedidoSchema = new Schema<typePedido>({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fecha: { type: Date, required: true, default: Date.now },
    estado: { type: String, required: true, enum: ['pendiente', 'completado', 'cancelado'], default: 'pendiente' },
    detallePedido: { type: [DetallePedidoSchema], required: true},
    pago: { type: Schema.Types.ObjectId, ref: 'Pago', required: false },
    envio: { type: Schema.Types.ObjectId, ref: 'Envio', required: false },
});

export const Pedido = mongoose.model<typePedido>('Pedido', PedidoSchema);
