import { Request, Response } from "express";

import * as employeeService from "../services/employeeService";

export async function createNewEmployee(req: Request, res: Response) {
    const { cpf } = req.body;

    await employeeService.createNewEmployee(cpf);

    res.sendStatus(201);
}