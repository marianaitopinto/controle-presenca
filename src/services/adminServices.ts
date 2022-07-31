import { AppError } from "../errors/appError";
import * as adminRepository from "../repositories/adminRepository";

export async function deletePresence(presenceId: number) {
  const presence = await adminRepository.findPresenceById(presenceId);
  if (!presence) throw new AppError("The presence was not found!", 404);

  await adminRepository.deletePresence(presenceId);
}
