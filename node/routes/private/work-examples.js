const config = require('../../config');
const WorkExample = require('../../models/work-example');
const winston = require('winston');

async function getAll (req, res) {
	if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
		return res.status(401).json({error: 'Authorisation token not supplied'});
	}

	try {
		const workExamples = await WorkExample.get(req.query);
		res.json(workExamples);
	} catch(error) {
		winston.error(error);
		res.sendStatus(500);
	}
}

async function create (req, res) {
	if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
		return res.status(401).json({error: 'Authorisation token not supplied'});
	}

	const workExampleObject = new WorkExample({
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
		const workExample = await WorkExample.create(workExampleObject);
		res.json(workExample);
	} catch (error) {
		winston.error(error);
		res.sendStatus(500);
	}
}

async function deleteOne (req, res) {
	if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
		return res.status(401).json({error: 'Authorisation token not supplied'});
	}

	try {
		await WorkExample.deleteOne(req.params.id);
		res.sendStatus(200);
	} catch (error) {
		winston.error(error);
		res.sendStatus(500);
	}
}

async function updateOne (req, res) {
	if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
		return res.status(401).json({error: 'Authorisation token not supplied'});
	}

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
