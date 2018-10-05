"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Debug = require("debug");
var debug = Debug('app');
function logErrors(err, req, res, next) {
    if (global.ENV === 'development' || global.ENV === 'testing') {
        debug(err);
    }
    next(err);
}
// handle all express generated errors with stacks
function errorHandler(err, req, res) {
    return res.error({ statusCode: err.statusCode, message: err.message });
}
exports.default = {
    logErrors: logErrors,
    errorHandler: errorHandler,
};
