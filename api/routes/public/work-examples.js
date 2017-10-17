const mongoose = require('mongoose');
const winston = require('winston');
const WorkExample = mongoose.model('WorkExample');

async function fetchWorkExample(req, res, next) {
	const id = req.params.id;

	if (!id) {
		return res.status(404).json({
			message: 'ID is required'
		});
	}
	try {
		const workExample = await WorkExample.findById(id);
		if (!workExample) {
			return res.status(404).json({
				message: 'Work example not found'
			});
		}
		req.workExample = workExample;
		next();
	} catch (error) {
		winston.errorlog(error);
		res.status(500).json(error);
	}
}

async function getAll (req, res) {
	try {
		const workExamples = await WorkExample.find({});
		res.json(workExamples);
	} catch(error) {
		winston.errorlog(error);
		res.status(500).json(error);
	}
}

async function get (req, res) {
	try {
		const workExample = req.workExample;
		res.json(workExample);
	} catch (error) {
		winston.errorlog(error);
		res.status(500).json(error);
	}
}

module.exports = {
	fetchWorkExample,
	getAll,
	get,
};
