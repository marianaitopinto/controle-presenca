import { Router } from "express";

import { deletePresence } from "../controllers/adminController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";

const adminRouter = Router();

adminRouter.delete("/presences/:presenceId", validateToken, deletePresence);

export default adminRouter;
