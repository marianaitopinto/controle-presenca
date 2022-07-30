import { Request, Response } from "express";

import * as employeeService from "../services/employeeService";

export async function createNewEmployee(req: Request, res: Response) {
  const { cpf }: { cpf: string } = req.body;

  await employeeService.createNewEmployee(cpf);

  res.status(201).send("Employee registered!");
}

export async function activeEmployee(req: Request, res: Response) {
  const { cpf, password }: { cpf: string; password: string } = req.body;

  await employeeService.activateEmployee(cpf, password);

  res.sendStatus(200);
}
