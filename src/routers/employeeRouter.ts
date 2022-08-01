import { Router } from "express";

import {
  createNewEmployee,
  activeEmployee,
  registerPresence,
} from "../controllers/employeeController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { newEmployeeSchema, employeeSchema } from "../schemas/employeeSchema";

const employeeRouter = Router();

employeeRouter.post("/employee", validateSchemaMiddleware(newEmployeeSchema), createNewEmployee);
employeeRouter.post("/employee/activate", validateSchemaMiddleware(employeeSchema), activeEmployee);
employeeRouter.post("/employee/presence", validateSchemaMiddleware(employeeSchema), registerPresence);

export default employeeRouter;
