"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var WorkExampleSchema = new mongoose_1.Schema({
    createdOn: Date,
    description: Array,
    content: Array,
    githubUrl: String,
    images: Array,
    technologies: [{ type: String, ref: 'Technology' }],
    title: String,
    type: String,
    url: String
});
exports.workExample = mongoose_1.model('WorkExample', WorkExampleSchema);
