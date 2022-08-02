"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.employeeSchema = exports.newEmployeeSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.newEmployeeSchema = joi_1["default"].object({
    cpf: joi_1["default"]
        .string()
        .required()
        .pattern(/^([0-9]{11})$/),
    name: joi_1["default"].string().required()
});
exports.employeeSchema = joi_1["default"].object({
    cpf: joi_1["default"]
        .string()
        .required()
        .pattern(/^([0-9]{11})$/),
    password: joi_1["default"].string().required()
});
//# sourceMappingURL=employeeSchema.js.map