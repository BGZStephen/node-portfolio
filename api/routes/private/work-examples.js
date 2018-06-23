const mongoose = require('mongoose');
const WorkExample = mongoose.model('WorkExample');
const router = require('express').Router();
const rest = require('api/utils/rest');
const _ = require('lodash');

async function load(req, res, next) {
	const id = req.params.id;
	const workExample = WorkExample.findById(id);

	if (!workExample) {
		return res.status(404).json({
			message: 'Work example not found',
		});
	}

	req.content.workExample = workExample;
	next();
}

async function getAll(req, res) {
	const workExamples = await WorkExample.find({});
	res.json(workExamples);
}

async function create(req, res) {
	const fields = [
		'content',
		'description',
		'githubUrl',
		'images',
		'technologies',
		'summary',
		'title',
		'type',
		'url',
	];
	const workExample = new WorkExample(_.pick(req.body, fields));

	await workExample.save();
	res.json(workExample);
}

async function deleteOne(req, res) {
	const workExample = req.context.workExample;

	await workExample.remove();
	res.sendStatus(200);
}

async function update(req, res) {
	const workExample = req.context.workExample;
	const updatableFields = [
		'content',
		'description',
		'githubUrl',
		'images',
		'technologies',
		'summary',
		'title',
		'type',
		'url',
	];

	workExample = _.assign(workExample, _.pick(req.body, updatableFields));
	await workExample.save();
	res.json(workExample);
}

router.get('/', getAll);
router.post('/', create);
router.all('/:id*', rest.asyncwrap(load));
router.delete('/:id', rest.asyncwrap(deleteOne));
router.put('/:id', rest.asyncwrap(update));

module.exports = router;
