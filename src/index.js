"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var URLController_1 = require("./controller/URLController");
var MongoConnection_1 = require("./database/MongoConnection");
var api = (0, express_1.default)();
api.use(express_1.default.json());
var database = new MongoConnection_1.MongoConnection();
database.connect();
var urlController = new URLController_1.URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);
api.listen(5000, function () { return console.log("Express listening"); });
