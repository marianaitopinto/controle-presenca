import { Router } from "express";

import {
  createNewEmployee,
  activeEmployee,
  registerPresence,
} from "../controllers/employeeController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";

const employeeRouter = Router();

employeeRouter.post("/employee", createNewEmployee);
employeeRouter.post("/employee/activate", activeEmployee);
employeeRouter.post("/employee/presence", registerPresence);

export default employeeRouter;
