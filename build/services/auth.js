"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var jwt = require("jsonwebtoken");
function isJWTValid(token) {
    try {
        jwt.verify(token, config_1.default.secret);
    }
    catch (err) {
        return false;
    }
    return true;
}
exports.isJWTValid = isJWTValid;
function onlyAuthenticated(req, res, next) {
    var token = req.get('x-access-token');
    if (!isJWTValid(token)) {
        return res.error({ statusCode: 403, message: 'Unauthorized' });
    }
    next();
}
exports.onlyAuthenticated = onlyAuthenticated;
