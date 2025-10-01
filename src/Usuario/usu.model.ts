import mongoose, { Schema, Document } from 'mongoose';
import { typeLocalidad } from '../Localidad/local.model.js';

export interface typeUsuario extends Document {
    nombre: string;
    apellido: string;
    email: string;
    contraseña: string;
    localidad: typeLocalidad['_id'];
    direccion: string;
    telefono: string;
}

const UsuarioSchema = new Schema<typeUsuario>({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    localidad: { type: Schema.Types.ObjectId, ref: 'Localidad', required: true },
    direccion: { type: String, required: true },
    telefono: { type: String, required: true }
});

export const Usuario = mongoose.model<typeUsuario>('Usuario', UsuarioSchema);