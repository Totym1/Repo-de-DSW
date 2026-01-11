import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../config/jwt.js";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    rol: string;
  };
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  console.log("Auth Header:", authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: "Token requerido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.body.usuario = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Token inválido" });
  }
};
