"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var employeeRouter_1 = __importDefault(require("./employeeRouter"));
var authRouter_1 = __importDefault(require("./authRouter"));
var adminRouter_1 = __importDefault(require("./adminRouter"));
var routers = (0, express_1.Router)();
routers.use(employeeRouter_1["default"]);
routers.use(authRouter_1["default"]);
routers.use(adminRouter_1["default"]);
exports["default"] = routers;
//# sourceMappingURL=index.js.map