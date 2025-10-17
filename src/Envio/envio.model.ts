import mongoose, { Schema, Document } from 'mongoose';
import { typeDireccion } from '../Direccion/direc.model.js';

export interface typeEnvio extends Document {
    direccion: typeDireccion['_id'];
    fechaEnvio: Date;
    fechaEntregaEstimada: Date;
    fechaEntregaReal?: Date;
    estado: "pendiente" | "enviado" | "entregado" | "cancelado";
}

const EnvioSchema = new Schema<typeEnvio>({
    direccion: { type: Schema.Types.ObjectId, ref: 'Direccion', required: true },
    fechaEnvio: { type: Date, required: true, default: Date.now },
    fechaEntregaEstimada: { type: Date, required: true },
    fechaEntregaReal: { type: Date },
    estado: { type: String, required: true, enum: ['pendiente', 'enviado', 'entregado', 'cancelado'], default: 'pendiente' }
});

export const Envio = mongoose.model<typeEnvio>('Envio', EnvioSchema);
