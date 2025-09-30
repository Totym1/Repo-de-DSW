import mongoose, { Schema, Document } from 'mongoose';

export interface ICategoria extends Document {
    idCategoria: number;
    nombre: string;
    descripcion: string;
}

const categoriaSchema = new Schema<ICategoria>({
    idCategoria: { type: Number, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
});

export const Categoria = mongoose.model<ICategoria>('Categoria', categoriaSchema);