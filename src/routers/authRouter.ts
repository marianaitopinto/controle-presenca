import { Router } from "express";

import { signIn } from "../controllers/authController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";

const authRouter = Router();

authRouter.post("/sign-in", signIn);

export default authRouter;