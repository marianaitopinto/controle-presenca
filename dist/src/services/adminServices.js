"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getAllPresences = exports.getPresences = exports.editPresence = exports.includePresence = exports.deletePresence = void 0;
var appError_1 = require("../errors/appError");
var adminRepository = __importStar(require("../repositories/adminRepository"));
var employeeRepository = __importStar(require("../repositories/employeeRepository"));
function deletePresence(presenceId) {
    return __awaiter(this, void 0, void 0, function () {
        var presence;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, adminRepository.findPresenceById(presenceId)];
                case 1:
                    presence = _a.sent();
                    if (!presence)
                        throw new appError_1.AppError("The presence was not found!", 404);
                    return [4 /*yield*/, adminRepository.deletePresence(presenceId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deletePresence = deletePresence;
function includePresence(cpf, date, hour) {
    return __awaiter(this, void 0, void 0, function () {
        var formatedDate, employee;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    date = formatDate(date, hour);
                    formatedDate = new Date(date);
                    return [4 /*yield*/, employeeRepository.findEmployeeByCpf(cpf)];
                case 1:
                    employee = _a.sent();
                    if (!employee)
                        throw new appError_1.AppError("The employee was not found!", 404);
                    return [4 /*yield*/, adminRepository.createPresence(employee.id, formatedDate)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.includePresence = includePresence;
function editPresence(presenceId, date, hour) {
    return __awaiter(this, void 0, void 0, function () {
        var presence, formatedDate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, adminRepository.findPresenceById(presenceId)];
                case 1:
                    presence = _a.sent();
                    if (!presence)
                        throw new appError_1.AppError("The presence was not found!", 404);
                    date = formatDate(date, hour);
                    formatedDate = new Date(date);
                    return [4 /*yield*/, adminRepository.editPresence(presenceId, formatedDate)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.editPresence = editPresence;
function getPresences(cpf, inicialDate, finalDate) {
    return __awaiter(this, void 0, void 0, function () {
        var employee, inicialHour, firstDate, finalHour, secondDate, presences;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, employeeRepository.findEmployeeByCpf(cpf)];
                case 1:
                    employee = _a.sent();
                    if (!employee)
                        throw new appError_1.AppError("The employee was not found!", 404);
                    inicialHour = "00:00";
                    inicialDate = formatDate(inicialDate, inicialHour);
                    firstDate = new Date(inicialDate);
                    finalHour = "23:59";
                    finalDate = formatDate(finalDate, finalHour);
                    secondDate = new Date(finalDate);
                    return [4 /*yield*/, adminRepository.filterPresence(employee.id, firstDate, secondDate)];
                case 2:
                    presences = _a.sent();
                    return [2 /*return*/, presences];
            }
        });
    });
}
exports.getPresences = getPresences;
function getAllPresences(inicialDate, finalDate) {
    return __awaiter(this, void 0, void 0, function () {
        var inicialHour, firstDate, finalHour, secondDate, presences;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inicialHour = "00:00";
                    inicialDate = formatDate(inicialDate, inicialHour);
                    firstDate = new Date(inicialDate);
                    finalHour = "23:59";
                    finalDate = formatDate(finalDate, finalHour);
                    secondDate = new Date(finalDate);
                    return [4 /*yield*/, adminRepository.filterPresences(firstDate, secondDate)];
                case 1:
                    presences = _a.sent();
                    return [2 /*return*/, presences];
            }
        });
    });
}
exports.getAllPresences = getAllPresences;
function formatDate(date, hour) {
    var dateSplit = date.split("-");
    var formatedDate = "".concat(dateSplit[2], "-").concat(("0" + dateSplit[1]).slice(-2), "-").concat(dateSplit[0].slice(-2), " ").concat("0" + hour.slice(-4), ":00");
    //FIX ME verificar timezone
    return formatedDate;
}
//# sourceMappingURL=adminServices.js.map