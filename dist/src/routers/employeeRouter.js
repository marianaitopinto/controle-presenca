"use strict";
exports.__esModule = true;
var express_1 = require("express");
var employeeController_1 = require("../controllers/employeeController");
var validateSchema_1 = require("../middlewares/validateSchema");
var employeeSchema_1 = require("../schemas/employeeSchema");
var employeeRouter = (0, express_1.Router)();
employeeRouter.post("/employee", (0, validateSchema_1.validateSchemaMiddleware)(employeeSchema_1.newEmployeeSchema), employeeController_1.createNewEmployee);
employeeRouter.post("/employee/activate", (0, validateSchema_1.validateSchemaMiddleware)(employeeSchema_1.employeeSchema), employeeController_1.activeEmployee);
employeeRouter.post("/employee/presence", (0, validateSchema_1.validateSchemaMiddleware)(employeeSchema_1.employeeSchema), employeeController_1.registerPresence);
exports["default"] = employeeRouter;
//# sourceMappingURL=employeeRouter.js.map