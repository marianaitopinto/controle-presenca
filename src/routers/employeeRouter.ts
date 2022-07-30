import { Router } from "express";

import { createNewEmployee } from "../controllers/employeeController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";

const employeeRouter = Router();

employeeRouter.post("/employee", createNewEmployee);

export default employeeRouter;