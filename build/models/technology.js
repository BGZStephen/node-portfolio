"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var TechnologySchema = new mongoose.Schema({
    _id: String,
    label: String,
    image: String,
    createdOn: { type: Date, default: function () { return new Date(); } }
});
module.exports = mongoose.model('Technology', TechnologySchema);
