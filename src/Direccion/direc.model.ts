import mongoose, { Schema, Document } from 'mongoose';

export interface typeDireccion extends Document {
    calle: string;
    nro: number;
    piso?: string;
    depto?: string;
    codPostal: string;
    ciudad: string;
}

const DireccionSchema = new Schema<typeDireccion>({
    calle: { type: String, required: true },
    nro: { type: Number, required: true },
    piso: { type: String },
    depto: { type: String },
    codPostal: { type: String, required: true },
    ciudad: { type: String, required: true }
});

export const Direccion = mongoose.model<typeDireccion>('Direccion', DireccionSchema);