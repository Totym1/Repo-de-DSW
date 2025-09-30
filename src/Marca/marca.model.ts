import mongoose, { Schema, Document } from 'mongoose';

export interface typeMarca extends Document {
    nombre: string;
    descripcion: string;
}

const MarcaSchema = new Schema<typeMarca>({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
});

export const Marca = mongoose.model<typeMarca>('Marca', MarcaSchema);
