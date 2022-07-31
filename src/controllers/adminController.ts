import { Request, Response } from "express";
import * as adminService from "../services/adminServices";

export async function getPresences(req: Request, res: Response) {
  const { cpf, inicialDate, finalDate } = req.body;
}

export async function deletePresence(req: Request, res: Response) {
  const { presenceId } = req.params;

  await adminService.deletePresence(parseInt(presenceId));

  res.sendStatus(200);
}
