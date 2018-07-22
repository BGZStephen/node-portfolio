const fs = require('fs');
const mongoose = require('mongoose');
const WorkExample = mongoose.model('WorkExample');
const router = require('express').Router();
const rest = require('api/utils/rest');
const multer = require('multer');
const _ = require('lodash');
const cloudinary = require('api/services/cloudinary');

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

async function create(req, res) {
	const fields = ['content', 'description', 'githubUrl', 'technologies', 'title', 'type', 'url'];
  const workExample = new WorkExample(_.assign({ images: [] }, _.pick(req.body, fields)));
  
  for (const file of req.files) {
    try {
      const cloudinaryResource = await cloudinary.uploadOne(file);
      workExample.images.push(cloudinaryResource.url);
    } catch (error) {
      await fs.unlinkSync(file.path);
      throw error;
    }

    await fs.unlinkSync(file.path);
  }

	await workExample.save();
	res.json(workExample);
}

async function remove(req, res) {
	const workExample = req.context.workExample;

	await workExample.remove();
	res.sendStatus(200);
}

async function update(req, res) {
	let workExample = req.context.workExample;
	const updatableFields = [
		'content',
		'description',
		'githubUrl',
		'images',
		'technologies',
		'title',
		'type',
		'url',
  ];

  if (req.body.images === 'null') {
    req.body.images = [];
  }

  if (req.body.technologies === 'null') {
    req.body.technologies = [];
  }

  workExample = _.assign(workExample, _.pick(req.body, updatableFields));

  for (const file of req.files) {
    try {
      const cloudinaryResource = await cloudinary.uploadOne(file);
      workExample.images.push(cloudinaryResource.url);
    } catch (error) {
      await fs.unlinkSync(file.path);
      throw error;
    }

    await fs.unlinkSync(file.path);
  }
  
	await workExample.save();
	res.json(workExample);
}

router.get('/', rest.asyncwrap(index));
router.post('/', multer({ dest: 'uploads/' }).array('files', 20), rest.asyncwrap(create));
router.all('/:id*', rest.asyncwrap(load));
router.delete('/:id', rest.asyncwrap(remove));
router.put('/:id', multer({ dest: 'uploads/' }).array('files', 20), rest.asyncwrap(update));

module.exports = router;
