"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bcrypt = require("bcryptjs");
var UserSchema = new mongoose_1.Schema({
    createdOn: Date,
    email: {
        type: String,
        unique: true,
    },
    name: String,
    password: { type: String, required: true },
    active: { type: Boolean, default: false },
});
UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 8);
    }
    next();
});
UserSchema.methods = {
    passwordsMatch: function (password) {
        return bcrypt.compareSync(password, this.password);
    },
};
exports.User = mongoose_1.model('User', UserSchema);
