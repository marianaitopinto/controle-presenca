import prisma from "../config/db";

export async function findEmployeeByCpf(cpf: string) {
  return prisma.employees.findUnique({ where: { cpf } });
}

export async function insertEmployee(cpf: string, name: string) {
  return prisma.employees.create({ data: { cpf, name } });
}

export async function activateEmployee(cpf: string, password: string) {
  return prisma.employees.update({
    where: { cpf },
    data: { password, isActive: true },
  });
}

export async function includePresence(id: number) {
  return prisma.presences.create({ data: { employeeId: id } });
}

export const employeeRepository = {
  findEmployeeByCpf,
  insertEmployee,
  activateEmployee,
  includePresence
}