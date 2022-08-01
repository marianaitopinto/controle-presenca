import prisma from "../config/db";

export async function deletePresence(id: number) {
  return prisma.presences.delete({ where: { id } });
}

export async function findPresenceById(id: number) {
  return prisma.presences.findUnique({ where: { id } });
}

export async function createPresence(id: number, date) {
  return prisma.presences.create({
    data: {
      employeeId: id,
      date,
    },
  });
}

export async function editPresence(id: number, date) {
  return prisma.presences.update({
    where: { id },
    data: { date },
  });
}

export async function filterPresence(
  id: number,
  inicialDate: Date,
  finalDate: Date
) {
  const presences = await prisma.presences.findMany({
    where: {
      AND: [
        { employeeId: id },
        { date: { gte: inicialDate } },
        { date: { lte: finalDate } },
      ],
    },
    include: { employee: { select: { cpf: true } } },
  });

  return presences;
}
