import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

// Middleware para validar y sanitizar
export const validarCategoria = [
  body("nombre")
    .trim()                 // para sacar espacios al principio/final
    .escape()               // convierte caracteres especiales como <, >, &, etc.
    .notEmpty()             .withMessage("El nombre es obligatorio")
    .isLength({ min: 2 })   .withMessage("El nombre debe tener al menos 2 caracteres")
    .isAlpha()              .withMessage("El nombre debe contener solo letras"),
  body("descripcion")
    .trim()
    .escape()
    .notEmpty()             .withMessage("La descripción es obligatoria")
    .isString()             .withMessage("La descripción debe ser una cadena de texto"),

  (req:Request, res:Response, next:NextFunction) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errors: errores.array() });
    }
    next();
  },
];