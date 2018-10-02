"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// async wrapper to catch errors from async  route calls.
function asyncwrap(fn) {
    var ctx = this;
    return function (req, res, next) {
        return fn.call(ctx, req, res, next).catch(next);
    };
}
exports.default = {
    asyncwrap: asyncwrap,
};
