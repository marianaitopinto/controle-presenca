import { AppError } from "../errors/appError";
import * as adminRepository from "../repositories/adminRepository";
import * as employeeRepository from "../repositories/employeeRepository";

export async function deletePresence(presenceId: number) {
  const presence = await adminRepository.findPresenceById(presenceId);
  if (!presence) throw new AppError("The presence was not found!", 404);

  await adminRepository.deletePresence(presenceId);
}

export async function includePresence(cpf: string, date: string, hour: string) {
  date = formatDate(date, hour);
  const formatedDate = new Date(date);

  const employee = await employeeRepository.findEmployeeByCpf(cpf);
  if (!employee) throw new AppError("The employee was not found!", 404);

  await adminRepository.createPresence(employee.id, formatedDate);
}

export async function editPresence(
  presenceId: number,
  date: string,
  hour: string
) {
  const presence = await adminRepository.findPresenceById(presenceId);
  if (!presence) throw new AppError("The presence was not found!", 404);

  date = formatDate(date, hour);
  const formatedDate = new Date(date);

  await adminRepository.editPresence(presenceId, formatedDate);
}

export async function getPresences(
  cpf: string,
  inicialDate: string,
  finalDate: string
) {
  const employee = await employeeRepository.findEmployeeByCpf(cpf);
  if (!employee) throw new AppError("The employee was not found!", 404);

  const inicialHour = "00:00";
  inicialDate = formatDate(inicialDate, inicialHour);
  const date1 = new Date(inicialDate);

  const finalHour = "23:59";
  finalDate = formatDate(finalDate, finalHour);
  const date2 = new Date(finalDate);

  console.log(date1, date2, employee.id)

  const presences = await adminRepository.filterPresence(employee.id, date1, date2)

  return presences;
}

function formatDateToBr(date, hour) {
  const dateSplit = date.split("-");

  const formatedDate = `${("0" + dateSplit[2]).slice(-2)}-${(
    "0" + dateSplit[1]
  ).slice(-2)}-${dateSplit[0]} ${"0" + hour.slice(-4)}`;

  return formatedDate;
}

function formatDate(date, hour) {
  const dateSplit = date.split("-");

  const formatedDate = `${dateSplit[2]}-${("0" + dateSplit[1]).slice(
    -2
  )}-${dateSplit[0].slice(-2)} ${"0" + hour.slice(-4)}:00`;

  //FIX ME verificar timezone
  return formatedDate;
}
