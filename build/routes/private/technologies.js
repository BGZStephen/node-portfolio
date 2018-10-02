"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var rest_1 = require("api/utils/rest");
var mongoose = require("mongoose");
var validate_1 = require("api/utils/validate");
var lodash_1 = require("lodash");
var router = express_1.Router();
var Technology = mongoose.model('Technology');
function index(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var technologies;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose.model('Technology').find()];
                case 1:
                    technologies = _a.sent();
                    res.json(technologies);
                    return [2 /*return*/];
            }
        });
    });
}
function load(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var technology;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.params.id) {
                        return [2 /*return*/, res.error({ statusCode: 400, message: 'Missing ID' })];
                    }
                    return [4 /*yield*/, mongoose.model('Technology').findById(req.params.id)];
                case 1:
                    technology = _a.sent();
                    if (!technology) {
                        return [2 /*return*/, res.error({ statusCode: 404, message: 'Technology not found' })];
                    }
                    req.context.technology = technology;
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
function get(req, res) {
    res.json(req.context.technology);
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fields, validationErrors, technology;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fields = ['_id', 'label'];
                    validationErrors = validate_1.default(req.body, {
                        _id: { presence: true },
                        label: { presence: true },
                    });
                    if (validationErrors) {
                        return [2 /*return*/, res.error({ statusCode: 400, message: validationErrors })];
                    }
                    technology = new Technology(lodash_1.default.pick(req.body, fields));
                    return [4 /*yield*/, technology.save()];
                case 1:
                    _a.sent();
                    res.json(technology);
                    return [2 /*return*/];
            }
        });
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var technology, fields;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    technology = req.context.technology;
                    fields = ['label'];
                    technology = lodash_1.default.assign(technology, lodash_1.default.pick(req.body, fields));
                    return [4 /*yield*/, technology.save()];
                case 1:
                    _a.sent();
                    res.json(technology);
                    return [2 /*return*/];
            }
        });
    });
}
router.get('/', rest_1.default.asyncwrap(index));
router.post('/', rest_1.default.asyncwrap(create));
router.all('/:id*', rest_1.default.asyncwrap(load));
router.get('/:id*', get);
router.put('/:id*', rest_1.default.asyncwrap(update));
exports.default = router;
