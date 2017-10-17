const WorkExample = require('../../models/work-example');
const winston = require('winston');

async function getAll (req, res) {
	try {
		const workExamples = await WorkExample.find({});
		res.json(workExamples);
	} catch(error) {
		winston.error(error);
		res.status(500).json(error);
	}
}

async function create (req, res) {
	const workExample = new WorkExample({
		createdOn: new Date(),
		content: req.body.content,
		description: req.body.description,
		githubUrl: req.body.githubUrl,
		images: req.body.images,
		technologies: req.body.technologies,
		summary: req.body.summary,
		title: req.body.title,
		type: req.body.type,
		url: req.body.url
	});

	try {
		workExample.save();
		res.json(workExample);
	} catch (error) {
		winston.error(error);
		res.status(500).json(error);
	}
}

async function deleteOne (req, res) {
	try {
		await WorkExample.deleteOne(req.params.id);
		res.sendStatus(200);
	} catch (error) {
		winston.error(error);
		res.sendStatus(500);
	}
}

async function updateOne (req, res) {
	try {
		const workExample = await WorkExample.updateWorkExample(req.body);
		res.json(workExample);
	} catch (error) {
		winston.error(error);
		res.sendStatus(500);
	}
}

module.exports = {
	deleteOne,
	getAll,
	create,
	updateOne
};
