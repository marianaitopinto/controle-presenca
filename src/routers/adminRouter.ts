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
import { includePresenceSchema, editPresenceSchema, filterPresencesSchemaWithCpf, filterPresenceSchema } from "../schemas/adminSchema";

const adminRouter = Router();

adminRouter.delete("/presences/:presenceId", validateToken, deletePresence);
adminRouter.post("/presences", validateToken, validateSchemaMiddleware(includePresenceSchema), includePresence);
adminRouter.put("/presences/:presenceId", validateToken, validateSchemaMiddleware(editPresenceSchema), editPresence);
adminRouter.get("/presences", validateToken, validateSchemaMiddleware(filterPresencesSchemaWithCpf), getPresencesByCpf);
adminRouter.get("/presences/all", validateSchemaMiddleware(filterPresenceSchema),validateToken, getPresences);

export default adminRouter;
