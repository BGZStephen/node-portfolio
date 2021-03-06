import { Request, Response, NextFunction, WorkExampleModel } from "../../interfaces";
import { Router } from 'express';
import rest from '../../utils/rest';
import cloudinary from '../../services/cloudinary';
import * as mongoose from 'mongoose';
import * as multer from 'multer';
import * as _ from 'lodash';

import * as fs from 'fs';
const WorkExample = mongoose.model<WorkExampleModel>('WorkExample');

const router = Router();

const ObjectId = mongoose.Types.ObjectId;

async function load(req: Request, res: Response, next: NextFunction): Promise<any> {
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

async function index(req: Request, res: Response): Promise<any> {
	const workExamples = await WorkExample.find({});
	res.json(workExamples);
}

async function create(req: Request, res: Response): Promise<any> {
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

async function remove(req: Request, res: Response): Promise<any> {
	const workExample = req.context.workExample;

	await workExample.remove();
	res.sendStatus(200);
}

async function update(req: Request, res: Response): Promise<any> {
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

export default router;
