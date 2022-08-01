import { Router } from "express";

import { deletePresence, includePresence, editPresence, getPresencesByCpf } from "../controllers/adminController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";

const adminRouter = Router();

adminRouter.delete("/presences/:presenceId", validateToken, deletePresence);
adminRouter.post("/presences", validateToken, includePresence);
adminRouter.put("/presences/:presenceId", validateToken, editPresence);
adminRouter.get("/presences", validateToken, getPresencesByCpf)

export default adminRouter;
