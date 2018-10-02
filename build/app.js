"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
global.ENV = process.env.NODE_ENV || 'development';
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var errorUtils = require('./utils/error-utils');
var debug = require('debug')('app');
var config_1 = require("./config");
var port = 3000;
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
app.use(require('./routes/public'));
app.use('/private', require('./routes/private'));
app.use(errorUtils.logErrors);
app.use(errorUtils.errorHandler);
app.listen(port, function () {
    debug("Server started, listening on port: " + port);
});
