"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asyncwrap(fn) {
    var ctx = this;
    return function (req, res, next) {
        return fn.call(ctx, req, res, next).catch(next);
    };
}
exports.default = {
    asyncwrap: asyncwrap,
};
