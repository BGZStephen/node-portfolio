const mongoose = require('mongoose');
const WorkExample = mongoose.model('WorkExample');
const rest = require('api/utils/rest');
const router = require('express').Router();

const ObjectId = mongoose.Types.ObjectId;

async function load(req, res, next) {
	const id = req.params.id;

  const workExample = await WorkExample.findById(ObjectId(id));
  
	if (!workExample) {
		return res.error({message: 'Work example not found', statusCode: 404});
  }
  
  if (req.query.populate || req.body.populate) {
    const fields = (req.query.populate || req.body.populate).split(',').join(' ');
    await workExample.populate(fields).execPopulate();
  }

	req.context.workExample = workExample;
	next();
}

async function index(req, res) {
	const workExamples = await WorkExample.find({});
	res.json(workExamples);
}

function get(req, res) {
	const workExample = req.context.workExample;
	res.json(workExample);
}

router.get('/', rest.asyncwrap(index));
router.all('/:id*', rest.asyncwrap(load));
router.get('/:id', get);

module.exports = router;
