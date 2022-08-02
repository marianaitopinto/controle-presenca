"use strict";
exports.__esModule = true;
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var validateSchema_1 = require("../middlewares/validateSchema");
var employeeSchema_1 = require("../schemas/employeeSchema");
var authRouter = (0, express_1.Router)();
authRouter.post("/sign-in", (0, validateSchema_1.validateSchemaMiddleware)(employeeSchema_1.employeeSchema), authController_1.signIn);
exports["default"] = authRouter;
//# sourceMappingURL=authRouter.js.map