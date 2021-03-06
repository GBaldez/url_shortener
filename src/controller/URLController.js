"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
var shortid_1 = __importDefault(require("shortid"));
var Constants_1 = require("../configs/Constants");
var URL_1 = require("../database/model/URL");
var URLController = /** @class */ (function () {
    function URLController() {
    }
    URLController.prototype.shorten = function (req, response) {
        return __awaiter(this, void 0, void 0, function () {
            var originURL, url, hash, shortURL, newURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        originURL = req.body.originURL;
                        return [4 /*yield*/, URL_1.URLModel.findOne({ originURL: originURL })];
                    case 1:
                        url = _a.sent();
                        if (url) {
                            response.json(url);
                            return [2 /*return*/];
                        }
                        hash = shortid_1.default.generate();
                        shortURL = Constants_1.config.API_URL + "/" + hash;
                        return [4 /*yield*/, URL_1.URLModel.create({ hash: hash, shortURL: shortURL, originURL: originURL })];
                    case 2:
                        newURL = _a.sent();
                        response.json(newURL);
                        return [2 /*return*/];
                }
            });
        });
    };
    URLController.prototype.redirect = function (req, response) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = req.params.hash;
                        return [4 /*yield*/, URL_1.URLModel.findOne({ hash: hash })];
                    case 1:
                        url = _a.sent();
                        if (url) {
                            response.redirect(url.originURL);
                            return [2 /*return*/];
                        }
                        response.status(400).json({ error: 'URL not found' });
                        return [2 /*return*/];
                }
            });
        });
    };
    return URLController;
}());
exports.URLController = URLController;
