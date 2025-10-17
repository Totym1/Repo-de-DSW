import mongoose, { Schema, Document } from 'mongoose';
import { typeUsuario } from '../Usuario/usu.model.js';

export interface typePedido extends Document {
    usuario: typeUsuario['_id'];
    fecha: Date;
    estado: "pendiente" | "completado" | "cancelado";
}

const PedidoSchema = new Schema<typePedido>({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fecha: { type: Date, required: true, default: Date.now },
    estado: { type: String, required: true, enum: ['pendiente', 'completado', 'cancelado'], default: 'pendiente' }
});

export const Pedido = mongoose.model<typePedido>('Pedido', PedidoSchema);
