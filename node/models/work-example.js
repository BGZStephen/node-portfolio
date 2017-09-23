const mongoose = require('mongoose');

const WorkExampleSchema = mongoose.Schema({
	createdOn: Date,
	description: Array,
	content: {type: Array, default: []},
	githubUrl: String,
	images: Array,
	technologies: Array,
	title: String,
	type: String,
	url: String
});

const WorkExample = module.exports = mongoose.model('WorkExample', WorkExampleSchema);

module.exports.create = function(workExampleObject) {
	return workExampleObject.save();
};

module.exports.deleteOne = function(workExampleObject) {
	return WorkExample.findOne(workExampleObject).remove();
};

module.exports.getAll = function(workExampleObject) {
	return WorkExample.find(workExampleObject);
};

module.exports.getOne = function(workExampleId) {
	return WorkExample.findById(workExampleId);
};

module.exports.updateWorkExample = function(workExampleObject) {
	return WorkExample.update({_id: workExampleObject._id}, workExampleObject);
};
