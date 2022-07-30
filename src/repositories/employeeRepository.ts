import prisma from "../config/db";

export async function findEmployeeByCpf(cpf: string) {
    return prisma.employees.findUnique({ where: { cpf } })
}

export async function insertEmployee(cpf: string) {
    return prisma.employees.create({ data: {cpf} })
}