const mongoose = require('mongoose');
const WorkExample = mongoose.model('WorkExample');
const rest = require('api/utils/rest');
const router = require('express').Router();

async function load(req, res, next) {
	const id = req.params.id;

	if (!id) {
		return res.status(404).json({
			message: 'ID is required',
		});
	}

	const workExample = await WorkExample.findById(id);
	if (!workExample) {
		return res.status(404).json({
			message: 'Work example not found',
		});
	}

	req.context.workExample = workExample;
	next();
}

async function getAll(req, res) {
	const workExamples = await WorkExample.find({});
	res.json(workExamples);
}

async function get(req, res) {
	const workExample = req.context.workExample;
	res.json(workExample);
}

router.get('/', rest.asyncwrap(getAll));
router.all('/:id*', rest.asyncwrap(load));
router.get('/:id', rest.asyncwrap(get));

module.exports = router;
