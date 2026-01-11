import mongoose, { Schema, Document } from 'mongoose';

export interface typeCategoria extends Document {
    nombre: string;
    descripcion: string;
}

const categoriaSchema = new Schema<typeCategoria>({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
});

export const Categoria = mongoose.model<typeCategoria>('Categoria', categoriaSchema);
