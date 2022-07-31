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
