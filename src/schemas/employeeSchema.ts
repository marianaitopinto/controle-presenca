import joi from "joi";

export const newEmployeeSchema = joi.object({
  cpf: joi
    .string()
    .required()
    .pattern(/^([0-9]{11})$/),
});

export const includePresenceSchema = joi.object({
  cpf: joi
    .string()
    .required()
    .pattern(/^([0-9]{11})$/),
});
