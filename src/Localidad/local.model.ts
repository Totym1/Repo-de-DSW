import mongoose, { Schema, Document } from 'mongoose';

export interface typeLocalidad extends Document {
    codPostal: string;
    ciudad: string;
}

const localidadSchema = new Schema<typeLocalidad>({
    codPostal: { type: String, required: true },
    ciudad: { type: String, required: true }
});

export const Localidad = mongoose.model<typeLocalidad>('Localidad', localidadSchema);