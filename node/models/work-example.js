const mongoose = require('mongoose');

const WorkExampleSchema = mongoose.Schema({
	createdOn: Date,
	description: Array,
	content: [],
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

module.exports.updateWorkExample = async function(workExampleObject) {
	await WorkExample.update({_id: workExampleObject._id}, workExampleObject);
	const workExample = await WorkExample.findById(workExampleObject._id);
	return workExample;
};
