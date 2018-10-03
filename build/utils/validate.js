"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate = require("validate.js");
function process(object, constraints, options) {
    var validationErrors = validate(object, constraints);
    if (!validationErrors) {
        return false;
    }
    if (!options.array && !options.single) {
        options.single = true;
    }
    if (options.array) {
        return generateErrorsArray(validationErrors, options);
    }
    if (options.single) {
        return generateSingleError(validationErrors, options);
    }
}
function generateErrorsArray(validationErrors, options) {
    if (options.customFrontEndMessages) {
        var errors_1 = [];
        for (var _i = 0, _a = Object.keys(validationErrors); _i < _a.length; _i++) {
            var key = _a[_i];
            if (options.customFrontEndMessages[key]) {
                errors_1.push(options.customFrontEndMessages[key]);
            }
            else {
                errors_1.push(validationErrors[key]);
            }
        }
        return errors_1;
    }
    var errors = [];
    for (var _b = 0, _c = Object.keys(validationErrors); _b < _c.length; _b++) {
        var key = _c[_b];
        errors.push(validationErrors[key]);
    }
    return errors;
}
function generateSingleError(validationErrors, options) {
    if (options.customFrontEndMessages) {
        var errors_2 = [];
        for (var _i = 0, _a = Object.keys(validationErrors); _i < _a.length; _i++) {
            var key = _a[_i];
            if (options.customFrontEndMessages[key]) {
                errors_2.push(options.customFrontEndMessages[key]);
            }
            else {
                errors_2.push(validationErrors[key]);
            }
        }
        return errors_2[0];
    }
    var errors = [];
    for (var _b = 0, _c = Object.keys(validationErrors); _b < _c.length; _b++) {
        var key = _c[_b];
        errors.push(validationErrors[key]);
    }
    return errors[0];
}
exports.default = process;
