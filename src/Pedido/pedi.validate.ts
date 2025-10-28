import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

//Middleware para validar y sanitizar
export const validarPedido = [
  body("fecha")
    .trim()                 // para sacar espacios al principio/final
    .escape()               // convierte caracteres especiales como <, >, &, etc.
    .notEmpty()             .withMessage("La fecha es obligatoria")
    .isDate()               .withMessage("La fecha debe tener un formato valido"),
  body("estado")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El estado es obligatorio")
    .isIn(["pendiente", "completado", "cancelado"])
    .withMessage("El estado debe ser 'pendiente', 'completado' o 'cancelado'"),
  body("envio")
    .optional()             //El envio es opcional
    .trim()
    .escape(),
  body("pago")
    .optional()             //El pago es opcional
    .trim()
    .escape(),
  body("usuario")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El usuario es obligatorio")          
    .isMongoId()            .withMessage("Id invalido"),

  (req: Request, res: Response, next: NextFunction) => {
    const errores = validationResult(req)
    if(!errores.isEmpty()) {
      return res.status(400).json({ errors: errores.array() });
    }
    next();
  },
];