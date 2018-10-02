"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var UserSchema = new mongoose.Schema({
    createdOn: Date,
    email: {
        type: String,
        unique: true,
    },
    name: String,
    password: String,
    active: { type: Boolean, default: false },
});
UserSchema.pre('save', function () {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 8);
    }
});
UserSchema.methods = {
    passwordsMatch: function (password) {
        return bcrypt.compareSync(password, this.password);
    },
};
module.exports = mongoose.model('User', UserSchema);
