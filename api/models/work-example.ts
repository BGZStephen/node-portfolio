import * as mongoose from 'mongoose';

const WorkExampleSchema = new mongoose.Schema({
	createdOn: Date,
	description: Array,
	content: Array,
	githubUrl: String,
	images: Array,
	technologies: [{type: String, ref: 'Technology'}],
	title: String,
	type: String,
	url: String
});

module.exports = mongoose.model('WorkExample', WorkExampleSchema);
