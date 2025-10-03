import mongoose, { Schema, Document } from 'mongoose';
import { typeMarca } from '../Marca/marca.model.js';
import { typeCategoria } from '../Categoria/categ.model.js';

export interface typeIndumentaria extends Document {
    categoria: typeCategoria['_id'];
    marca: typeMarca['_id'];
    nombre: string;
    stock: number;
    precio: number;
    talle: string;
    color: string;
}

const IndumentariaSchema = new Schema<typeIndumentaria>({
    categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true },
    marca: { type: Schema.Types.ObjectId, ref: 'Marca', required: true },
    nombre: { type: String, required: true },
    stock: { type: Number, required: true },
    precio: { type: Number, required: true },
    talle: { type: String, required: true },
    color: { type: String, required: true }
});

export const Indumentaria = mongoose.model<typeIndumentaria>('Indumentaria', IndumentariaSchema);
