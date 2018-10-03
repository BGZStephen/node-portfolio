"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
global.ENV = process.env.NODE_ENV || 'development';
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var Debug = require("debug");
var error_utils_1 = require("./utils/error-utils");
var config_1 = require("./config");
var port = 3000;
var debug = Debug('app');
mongoose.connect(config_1.default.database);
mongoose.connection.on('connected', function () {
    debug('Connected to database successfully');
});
mongoose.connection.on('error', function (err) {
    debug('Error: ' + err);
});
require('./models');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.error = function (params) {
        if (params.message) {
            res.statusMessage = params.message;
        }
        debug("API Error: " + (params.statusCode || '') + " " + (params.message || ''));
        return res.status(params.statusCode).json(params);
    };
    req.context = {};
    next();
});
var public_1 = require("./routes/public");
var private_1 = require("./routes/private");
app.use(public_1.default);
app.use('/private', private_1.default);
app.use(error_utils_1.default.logErrors);
app.use(error_utils_1.default.errorHandler);
app.listen(port, function () {
    debug("Server started, listening on port: " + port);
});
