import { registerService, loginService } from "./auth.service.js";
import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const usuario = await registerService(data);
    res.status(201).json(usuario);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, contraseña } = req.body;

  try {
    const data = await loginService(email, contraseña);
    res.json(data);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
