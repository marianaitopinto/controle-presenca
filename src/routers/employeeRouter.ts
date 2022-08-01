import { Router } from "express";

import {
  createNewEmployee,
  activeEmployee,
  registerPresence,
} from "../controllers/employeeController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { newEmployeeSchema } from "../schemas/employeeSchema";

const employeeRouter = Router();

employeeRouter.post("/employee", validateSchemaMiddleware(newEmployeeSchema), createNewEmployee);
employeeRouter.post("/employee/activate", activeEmployee);
employeeRouter.post("/employee/presence", registerPresence);

export default employeeRouter;
