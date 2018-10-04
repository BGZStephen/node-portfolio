import { Schema, Model, model } from 'mongoose';
import { WorkExampleModel } from '../interfaces';

const WorkExampleSchema = new Schema({
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

export const workExample: Model<WorkExampleModel> = model<WorkExampleModel>('WorkExample', WorkExampleSchema);
