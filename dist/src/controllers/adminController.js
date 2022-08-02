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
exports.editPresence = exports.includePresence = exports.deletePresence = exports.getPresences = exports.getPresencesByCpf = void 0;
var adminService = __importStar(require("../services/adminServices"));
function getPresencesByCpf(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, cpf, inicialDate, finalDate, presences;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, cpf = _a.cpf, inicialDate = _a.inicialDate, finalDate = _a.finalDate;
                    return [4 /*yield*/, adminService.getPresences(cpf, inicialDate, finalDate)];
                case 1:
                    presences = _b.sent();
                    res.status(200).send({ presences: presences });
                    return [2 /*return*/];
            }
        });
    });
}
exports.getPresencesByCpf = getPresencesByCpf;
function getPresences(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, inicialDate, finalDate, presences;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, inicialDate = _a.inicialDate, finalDate = _a.finalDate;
                    return [4 /*yield*/, adminService.getAllPresences(inicialDate, finalDate)];
                case 1:
                    presences = _b.sent();
                    res.status(200).send({ presences: presences });
                    return [2 /*return*/];
            }
        });
    });
}
exports.getPresences = getPresences;
function deletePresence(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var presenceId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    presenceId = req.params.presenceId;
                    return [4 /*yield*/, adminService.deletePresence(parseInt(presenceId))];
                case 1:
                    _a.sent();
                    res.sendStatus(200);
                    return [2 /*return*/];
            }
        });
    });
}
exports.deletePresence = deletePresence;
function includePresence(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, cpf, date, hour;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, cpf = _a.cpf, date = _a.date, hour = _a.hour;
                    return [4 /*yield*/, adminService.includePresence(cpf, date, hour)];
                case 1:
                    _b.sent();
                    res.sendStatus(200);
                    return [2 /*return*/];
            }
        });
    });
}
exports.includePresence = includePresence;
function editPresence(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var presenceId, _a, date, hour;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    presenceId = req.params.presenceId;
                    _a = req.body, date = _a.date, hour = _a.hour;
                    return [4 /*yield*/, adminService.editPresence(parseInt(presenceId), date, hour)];
                case 1:
                    _b.sent();
                    res.sendStatus(200);
                    return [2 /*return*/];
            }
        });
    });
}
exports.editPresence = editPresence;
//# sourceMappingURL=adminController.js.map