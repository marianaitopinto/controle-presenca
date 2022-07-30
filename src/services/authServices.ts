import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "dotenv/config";

import { AppError } from "../errors/appError";
import * as employeeRepository from "../repositories/employeeRepository";

export async function signIn(cpf, password) {
  const user = await employeeRepository.findEmployeeByCpf(cpf);

  if (!user || !(await bcrypt.compare(password, user.password)))
    throw new AppError("CPF or password is incorrect", 401);

  if (!user.isAdmin) throw new AppError("Unauthorized", 401);
  
  const token = await generateToken(user);

  return token;
}

async function generateToken(user: any) {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);
  return token;
}
