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
var rest_1 = require("../../utils/rest");
var cloudinary_1 = require("../../services/cloudinary");
var mongoose = require("mongoose");
var multer = require("multer");
var _ = require("lodash");
var fs = require("fs");
var WorkExample = mongoose.model('WorkExample');
var router = express_1.Router();
var ObjectId = mongoose.Types.ObjectId;
function load(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, workExample, fields;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4 /*yield*/, WorkExample.findById(ObjectId(id))];
                case 1:
                    workExample = _a.sent();
                    if (!workExample) {
                        return [2 /*return*/, res.error({ message: 'Work example not found', statusCode: 404 })];
                    }
                    if (!(req.query.populate || req.body.populate)) return [3 /*break*/, 3];
                    fields = (req.query.populate || req.body.populate).split(',').join(' ');
                    return [4 /*yield*/, workExample.populate(fields).execPopulate()];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    req.context.workExample = workExample;
                    next();
                    return [2 /*return*/];
            }
        });
    });
}
function index(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var workExamples;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, WorkExample.find({})];
                case 1:
                    workExamples = _a.sent();
                    res.json(workExamples);
                    return [2 /*return*/];
            }
        });
    });
}
function create(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fields, workExample, _i, _a, file, cloudinaryResource, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fields = ['content', 'description', 'githubUrl', 'technologies', 'title', 'type', 'url'];
                    workExample = new WorkExample(_.assign({ images: [] }, _.pick(req.body, fields)));
                    _i = 0, _a = req.files;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                    file = _a[_i];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 6]);
                    return [4 /*yield*/, cloudinary_1.default.uploadOne(file)];
                case 3:
                    cloudinaryResource = _b.sent();
                    workExample.images.push(cloudinaryResource.url);
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _b.sent();
                    return [4 /*yield*/, fs.unlinkSync(file.path)];
                case 5:
                    _b.sent();
                    throw error_1;
                case 6: return [4 /*yield*/, fs.unlinkSync(file.path)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 1];
                case 9: return [4 /*yield*/, workExample.save()];
                case 10:
                    _b.sent();
                    res.json(workExample);
                    return [2 /*return*/];
            }
        });
    });
}
function remove(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var workExample;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    workExample = req.context.workExample;
                    return [4 /*yield*/, workExample.remove()];
                case 1:
                    _a.sent();
                    res.sendStatus(200);
                    return [2 /*return*/];
            }
        });
    });
}
function update(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var workExample, updatableFields, _i, _a, file, cloudinaryResource, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    workExample = req.context.workExample;
                    updatableFields = [
                        'content',
                        'description',
                        'githubUrl',
                        'images',
                        'technologies',
                        'title',
                        'type',
                        'url',
                    ];
                    if (req.body.images === 'null') {
                        req.body.images = [];
                    }
                    if (req.body.technologies === 'null') {
                        req.body.technologies = [];
                    }
                    workExample = _.assign(workExample, _.pick(req.body, updatableFields));
                    _i = 0, _a = req.files;
                    _b.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                    file = _a[_i];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 6]);
                    return [4 /*yield*/, cloudinary_1.default.uploadOne(file)];
                case 3:
                    cloudinaryResource = _b.sent();
                    workExample.images.push(cloudinaryResource.url);
                    return [3 /*break*/, 6];
                case 4:
                    error_2 = _b.sent();
                    return [4 /*yield*/, fs.unlinkSync(file.path)];
                case 5:
                    _b.sent();
                    throw error_2;
                case 6: return [4 /*yield*/, fs.unlinkSync(file.path)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 1];
                case 9: return [4 /*yield*/, workExample.save()];
                case 10:
                    _b.sent();
                    res.json(workExample);
                    return [2 /*return*/];
            }
        });
    });
}
router.get('/', rest_1.default.asyncwrap(index));
router.post('/', multer({ dest: 'uploads/' }).array('files', 20), rest_1.default.asyncwrap(create));
router.all('/:id*', rest_1.default.asyncwrap(load));
router.delete('/:id', rest_1.default.asyncwrap(remove));
router.put('/:id', multer({ dest: 'uploads/' }).array('files', 20), rest_1.default.asyncwrap(update));
exports.default = router;
