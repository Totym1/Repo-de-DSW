import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware.js";

export const authorize =
  (rolesPermitidos: string[]) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !rolesPermitidos.includes(req.user.rol)) {
      return res.status(403).json({ message: "Acceso denegado" });
    }
    next();
  };
