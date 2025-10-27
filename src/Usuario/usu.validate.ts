import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

// Middleware para validar y sanitizar
export const validarUsuario = [
  body("nombre")
    .trim()                 // para sacar espacios al principio/final
    .escape()               // convierte caracteres especiales como <, >, &, etc.
    .notEmpty()             .withMessage("El nombre es obligatorio")
    .isLength({ min: 2 })   .withMessage("El nombre debe tener al menos 2 caracteres")
    .isAlpha()              .withMessage("El nombre debe contener solo letras"),
  body("apellido")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El apellido es obligatorio")
    .isLength({ min: 2 })   .withMessage("El apellido debe tener al menos 2 caracteres")
    .isAlpha()              .withMessage("El apellido debe contener solo letras"),
  body("email")
    .trim()
    .normalizeEmail()       // normaliza el email (convierte a minúsculas, elimina puntos innecesarios, etc.)
    .notEmpty()             .withMessage("El email es obligatorio")
    .isEmail()              .withMessage("El email debe ser válido"),
  body("contraseña")
    .notEmpty()             .withMessage("La contraseña es obligatoria")
    .isLength({ min: 6 })   .withMessage("La contraseña debe tener al menos 6 caracteres"),
  body("telefono")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El teléfono es obligatorio")
    .isMobilePhone("es-AR") .withMessage("El teléfono debe ser un número de teléfono válido en Argentina"),
    
  (req:Request, res:Response, next:NextFunction) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errors: errores.array() });
    }
    next();
  },
];