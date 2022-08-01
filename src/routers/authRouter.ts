import { Router } from "express";

import { signIn } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { employeeSchema } from "../schemas/employeeSchema";

const authRouter = Router();

authRouter.post("/sign-in", validateSchemaMiddleware(employeeSchema), signIn);

export default authRouter;
