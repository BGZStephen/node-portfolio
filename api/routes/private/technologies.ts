import { Router, Request, Response, NextFunction } from 'express';
import rest from 'api/utils/rest';
import * as mongoose from 'mongoose';
import validate from 'api/utils/validate';
import * as _ from 'lodash';

const router = Router()

const Technology = mongoose.model('Technology');

async function index(req: Request, res: Response): Promise<any> {
    const technologies = await mongoose.model('Technology').find();
    res.json(technologies);
}

async function load(req: Request, res: Response, next: NextFunction): Promise<any> {
  if (!req.params.id) {
    return res.error({statusCode: 400, message: 'Missing ID'});
  }

  const technology = await mongoose.model('Technology').findById(req.params.id);

  if (!technology) {
    return res.error({statusCode: 404, message: 'Technology not found'});
  }

  req.context.technology = technology;

  next();
}

function get(req: Request, res: Response): void {
  res.json(req.context.technology);
}

async function create(req: Request, res: Response): Promise<any> {
    const fields = ['_id', 'label'];

    const validationErrors = validate(req.body, {
        _id: {presence: true},
        label: {presence: true},
    });
    
    if (validationErrors) {
        return res.error({statusCode: 400, message: validationErrors});
    }

    const technology = new Technology(_.pick(req.body, fields));
    await technology.save();

    res.json(technology);
}

async function update(req: Request, res: Response): Promise<any> {
  let technology = req.context.technology;

  const fields = ['label'];

  technology = _.assign(technology, _.pick(req.body, fields));

  await technology.save();

  res.json(technology);
}

router.get('/', rest.asyncwrap(index));
router.post('/', rest.asyncwrap(create));
router.all('/:id*', rest.asyncwrap(load));
router.get('/:id*', get);
router.put('/:id*', rest.asyncwrap(update));

export default router;