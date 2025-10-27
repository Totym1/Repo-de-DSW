import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

//Middleware para validar y sanitizar
export const validarDireccion = [
  body("calle")
    .trim()                 // para sacar espacios al principio/final
    .escape()               // convierte caracteres especiales como <, >, &, etc.
    .notEmpty()             .withMessage("La calle es obligatoria")
    .isLength({ min: 2})    .withMessage("La calle debe tener al menos 2 caracteres")
    .isString(),
  body("nro")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El numero es obligatorio")
    .isLength({ min: 3})    .withMessage("El numero debe tener al menos 3 unidades"),
  body("piso")
    .optional()             //El piso es opcional
    .trim()
    .escape(),
  body("depto")
    .optional()             //El depto es opcional
    .trim()
    .escape(),
  body("codPostal")
    .trim()
    .escape()
    .notEmpty()             .withMessage("El codigo postal es obligatorio")
    .isLength({ min: 4, max: 4 })
    .isNumeric()            
    .withMessage("El código postal debe tener 4 números (ej: 2000)."),
  body("ciudad")
    .trim()
    .escape()
    .notEmpty()             .withMessage("La ciudad es obligatoria")
    .isLength({min: 3})     .withMessage("La ciudad debe tener al menos 3 caracteres")
    .isAlpha()              .withMessage("La ciudad debe contener solo letras"),

  (req: Request, res: Response, next: NextFunction) => {
    const errores = validationResult(req)
    if(!errores.isEmpty()) {
      return res.status(400).json({ errors: errores.array() });
    }
    next();
  },
];