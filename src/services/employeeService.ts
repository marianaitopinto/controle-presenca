import { AppError } from "../errors/appError";
import bcrypt from "bcrypt";

import * as employeeRepository from "../repositories/employeeRepository";

const SALT_ROUNDS = 10;

export async function createNewEmployee(cpf: string) {
  const employeeExist = await employeeRepository.findEmployeeByCpf(cpf);
  if (employeeExist)
    throw new AppError("The employee is already registered!", 409);

  await employeeRepository.insertEmployee(cpf);
}

export async function activateEmployee(cpf: string, password: string) {
  const employeeExist = await employeeRepository.findEmployeeByCpf(cpf);
  if (!employeeExist) throw new AppError("The employee was not found!", 404);

  if (employeeExist.password)
    throw new AppError("The employee is already activate", 409);

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  await employeeRepository.activateEmployee(cpf, hashedPassword);
}
