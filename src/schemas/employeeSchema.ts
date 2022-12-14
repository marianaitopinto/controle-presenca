import joi from "joi";

export const newEmployeeSchema = joi.object({
  cpf: joi
    .string()
    .required()
    .pattern(/^([0-9]{11})$/),
  name: joi.string().required(),
});

export const employeeSchema = joi.object({
  cpf: joi
    .string()
    .required()
    .pattern(/^([0-9]{11})$/),
  password: joi.string().required(),
});
