"use strict";
exports.__esModule = true;
var express_1 = require("express");
var adminController_1 = require("../controllers/adminController");
var validateSchema_1 = require("../middlewares/validateSchema");
var validateToken_1 = require("../middlewares/validateToken");
var adminSchema_1 = require("../schemas/adminSchema");
var adminRouter = (0, express_1.Router)();
adminRouter["delete"]("/presences/:presenceId", validateToken_1.validateToken, adminController_1.deletePresence);
adminRouter.post("/presences", validateToken_1.validateToken, (0, validateSchema_1.validateSchemaMiddleware)(adminSchema_1.includePresenceSchema), adminController_1.includePresence);
adminRouter.put("/presences/:presenceId", validateToken_1.validateToken, (0, validateSchema_1.validateSchemaMiddleware)(adminSchema_1.editPresenceSchema), adminController_1.editPresence);
adminRouter.get("/presences", validateToken_1.validateToken, (0, validateSchema_1.validateSchemaMiddleware)(adminSchema_1.filterPresencesSchemaWithCpf), adminController_1.getPresencesByCpf);
adminRouter.get("/presences/all", (0, validateSchema_1.validateSchemaMiddleware)(adminSchema_1.filterPresenceSchema), validateToken_1.validateToken, adminController_1.getPresences);
exports["default"] = adminRouter;
//# sourceMappingURL=adminRouter.js.map