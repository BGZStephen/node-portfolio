import { Request, Response, NextFunction } from '../../interfaces';
import { Router } from "express";
import rest from '../../utils/rest';
import * as mongoose from 'mongoose';

const WorkExample = mongoose.model('WorkExample');
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

function get(req: Request, res: Response): void {
	const workExample = req.context.workExample;
	res.json(workExample);
}

router.get('/', rest.asyncwrap(index));
router.all('/:id*', rest.asyncwrap(load));
router.get('/:id', get);

export default router;
