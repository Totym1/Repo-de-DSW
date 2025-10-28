import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

//Middleware para validar y sanitizar
export const validarDetalle = [
  body("cantidad")
    .trim()                 // para sacar espacios al principio/final
    .escape()               // convierte caracteres especiales como <, >, &, etc.
    .notEmpty()             .withMessage("La cantidad es obligatoria")
    .isInt()                .withMessage("La cantidad debe ser un numero entero"),
  body("precioUnitario")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El precio unitario es obligatorio")
    .isNumeric()            .withMessage("El precio unitario debe ser un numero"),
  body("pedido")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El pedido es obligatorio")
    .isMongoId()            .withMessage("Id invalido"),
  body("indumentaria")
    .trim()
    .escape()
    .notEmpty()             .withMessage("La indumentaria es obligatoria")
    .isMongoId()            .withMessage("Id invalido"),

  (req: Request, res: Response, next: NextFunction) => {
    const errores = validationResult(req)
    if(!errores.isEmpty()) {
      return res.status(400).json({ errors: errores.array() });
    }
    next();
  },
];