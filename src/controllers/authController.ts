import { Request, Response } from "express";
import * as authService from "../services/authServices";

export async function signIn(req: Request, res: Response) {
  const { cpf, password } = req.body;
  const token = await authService.signIn(cpf, password);

  res.status(200).send(token);
}
