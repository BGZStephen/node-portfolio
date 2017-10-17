const WorkExample = require('../../models/work-example');
const winston = require('winston');

async function getAll (req, res) {
	try {
		const workExamples = await WorkExample.getAll();
		res.json(workExamples);
	} catch(error) {
		winston.errorlog(error);
		res.sendStatus(500);
	}
}

async function getOne (req, res) {
	try {
		const workExamples = await WorkExample.getOne(req.params.id);
		res.json(workExamples);
	} catch(error) {
		winston.errorlog(error);
		res.sendStatus(500);
	}
}

module.exports = {
	getAll,
	getOne,
};
