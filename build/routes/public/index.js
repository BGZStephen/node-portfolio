"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("./users");
var work_examples_1 = require("./work-examples");
var router = express_1.Router();
router.use('/users', users_1.default);
router.use('/work-examples', work_examples_1.default);
exports.default = router;
