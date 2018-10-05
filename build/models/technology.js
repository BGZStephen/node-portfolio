"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TechnologySchema = new mongoose_1.Schema({
    label: String,
    image: String,
    createdOn: { type: Date, default: function () { return new Date(); } }
});
exports.technology = mongoose_1.model('Technology', TechnologySchema);
