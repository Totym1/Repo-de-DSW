import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Usuario } from "../CRUDs/Usuario/usu.model.js";
import { JWT_SECRET, JWT_EXPIRES } from "../config/jwt.js";

export const registerService = async (data: any) => {
  const hash = await bcrypt.hash(data.contraseña, 10);

  const usuario = await Usuario.create({
    ...data,
    contraseña: hash,
  });

  return usuario;
};

export const loginService = async (email: string, contraseña: string) => {
  const usuario = await Usuario.findOne({ email });

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }

  const esValida = await bcrypt.compare(contraseña, usuario.contraseña);

  if (!esValida) {
    throw new Error("Contraseña incorrecta");
  }

  const token = jwt.sign(
    { id: usuario._id, 
      email: usuario.email,
      rol: usuario.rol
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES }
  );

  return {
    token,
    usuario: {
      _id: usuario._id,
      nombre: usuario.nombre,
      email: usuario.email,
    },
  };
};
