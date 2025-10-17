import mongoose, { Schema, Document } from 'mongoose';
import { typeUsuario } from '../Usuario/usu.model.js';
import { typeEnvio } from '../Envio/envio.model.js';
import { typePago } from '../Pago/pago.model.js';

export interface typePedido extends Document {
    usuario: typeUsuario['_id'];
    fecha: Date;
    estado: "pendiente" | "completado" | "cancelado";
    pago: typePago['_id'];
    envio: typeEnvio['_id'];
}

const PedidoSchema = new Schema<typePedido>({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fecha: { type: Date, required: true, default: Date.now },
    estado: { type: String, required: true, enum: ['pendiente', 'completado', 'cancelado'], default: 'pendiente' },
    pago: { type: Schema.Types.ObjectId, ref: 'Pago', required: true },
    envio: { type: Schema.Types.ObjectId, ref: 'Envio', required: true },
});

export const Pedido = mongoose.model<typePedido>('Pedido', PedidoSchema);
