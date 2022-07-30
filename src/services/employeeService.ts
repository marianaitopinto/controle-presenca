import { AppError } from "../errors/appError";
import * as employeeRepository from "../repositories/employeeRepository";

export async function createNewEmployee(cpf: string) {
    const employeeExist = await employeeRepository.findEmployeeByCpf(cpf);
    if (employeeExist) throw new AppError("The employee is already registered!", 409);

    await employeeRepository.insertEmployee(cpf);
}