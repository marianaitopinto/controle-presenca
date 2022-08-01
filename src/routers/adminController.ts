import { Router } from "express";

import {
  deletePresence,
  includePresence,
  editPresence,
  getPresencesByCpf,
  getPresences,
} from "../controllers/adminController";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";

const adminRouter = Router();

adminRouter.delete("/presences/:presenceId", validateToken, deletePresence);
adminRouter.post("/presences", validateToken, includePresence);
adminRouter.put("/presences/:presenceId", validateToken, editPresence);
adminRouter.get("/presences", validateToken, getPresencesByCpf);
adminRouter.get("/presences/all", validateToken, getPresences);

export default adminRouter;
