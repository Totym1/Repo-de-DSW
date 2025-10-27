import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

//Middleware para validar y sanitizar
export const validarIndumentaria = [
  body("nombre")
    .trim()                 // para sacar espacios al principio/final
    .escape()               // convierte caracteres especiales como <, >, &, etc.
    .notEmpty()             .withMessage("El nombre es obligatorio")
    .isLength({ min: 2 })   .withMessage("El nombre debe tener al menos 2 caracteres")
    .isAlpha()              .withMessage("El nombre debe contener solo letras"),
  body("stock")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El stock es obligatorio")
    .isInt()                .withMessage("El stock debe ser un numero entero"),
  body("precio")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El precio es obligatorio")
    .isNumeric()            .withMessage("El precio debe ser un numero"),
  body("talle")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El talle es obligatorio")
    .isString(),
  body("color")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El color es obligatorio")
    .isString(),
  body("imagen")
    .trim()
    .escape()
    .notEmpty()             .withMessage("La imagen es obligatoria")
    .isURL()                .withMessage("La imagen debe ser una URL valida"),
  body("categoria")
    .trim()
    .escape()
    .notEmpty()             .withMessage("La categoria es obligatoria")
    .isMongoId()            .withMessage("Id invalido"), 
  body("marca")
    .trim()
    .escape()
    .notEmpty()             .withMessage("La marca es obligatoria")
    .isMongoId()            .withMessage("Id invalido"),

  (req:Request, res:Response, next:NextFunction) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errors: errores.array() });
    }
    next();
  },
];