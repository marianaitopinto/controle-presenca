import { Router } from "express";

import { deletePresence, includePresence } from "../controllers/adminController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";

const adminRouter = Router();

adminRouter.delete("/presences/:presenceId", validateToken, deletePresence);
adminRouter.post("/presences", validateToken, includePresence)

export default adminRouter;
