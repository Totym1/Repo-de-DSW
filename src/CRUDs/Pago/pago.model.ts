import mongoose, { Schema, Document } from 'mongoose';

export interface typePago extends Document {
    fechaPago: Date;
    monto: number;
    metodoPago: "Tarjeta" | "MercadoPago";
    estado: "Pendiente" | "Aprobado" | "Rechazado";
}

const PagoSchema = new Schema<typePago>({
    fechaPago: { type: Date, required: true, default: Date.now },
    monto: { type: Number, required: true },
    metodoPago: { type: String, required: true, enum: ['Tarjeta', 'MercadoPago'] },
    estado: { type: String, required: true, enum: ['Pendiente', 'Aprobado', 'Rechazado'], default: 'Pendiente' },
});

export const Pago = mongoose.model<typePago>('Pago', PagoSchema);