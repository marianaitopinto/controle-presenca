import { Request, Response } from "express";

import * as employeeService from "../services/employeeService";

export async function createNewEmployee(req: Request, res: Response) {
  const { cpf, name }: { cpf: string, name:string } = req.body;

  await employeeService.createNewEmployee(cpf, name);

  res.status(201).send("Employee registered!");
}

export async function activeEmployee(req: Request, res: Response) {
  const { cpf, password }: { cpf: string; password: string } = req.body;

  await employeeService.activateEmployee(cpf, password);

  res.sendStatus(200);
}

export async function registerPresence(req: Request, res: Response) {
  const { cpf, password }: { cpf: string; password: string } = req.body;

  await employeeService.createPresence(cpf, password);

  res.sendStatus(200);
}
