import mongoose, { Schema, Document } from 'mongoose';

export interface typeUsuario extends Document {
    nombre: string;
    apellido: string;
    email: string;
    contraseña: string;
    telefono: string;
}

const UsuarioSchema = new Schema<typeUsuario>({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    telefono: { type: String, required: true }
});

export const Usuario = mongoose.model<typeUsuario>('Usuario', UsuarioSchema);