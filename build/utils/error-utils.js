"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require('debug')('app');
function logErrors(err, req, res, next) {
    if (global.ENV === 'development' || global.ENV === 'testing') {
        debug(err);
    }
    next(err);
}
// handle all express generated errors with stacks
function errorHandler(err, req, res) {
    return res.status(err.statusCode || 500).json(err);
}
exports.default = {
    logErrors: logErrors,
    errorHandler: errorHandler,
};
