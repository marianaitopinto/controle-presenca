import { Router } from "express";

import {
  createNewEmployee,
  activeEmployee,
} from "../controllers/employeeController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";

const employeeRouter = Router();

employeeRouter.post("/employee", createNewEmployee);
employeeRouter.post("/employee/activate", activeEmployee);

export default employeeRouter;
