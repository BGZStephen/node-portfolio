const router = require('express').Router();
const rest = require('api/utils/rest');
const mongoose = require('mongoose');
const validate = require('api/utils/validate');
const _ = require('lodash');

const Technology = mongoose.model('Technology');

async function index(req, res) {
    const technologies = await mongoose.model('Technology').find();
    res.json(technologies);
}

async function load(req, res, next) {
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

async function get(req, res) {
  res.json(req.context.technology);
}

async function create(req, res) {
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

router.get('/', rest.asyncwrap(index));
router.post('/', rest.asyncwrap(create));
router.all('/:id*', rest.asyncwrap(load));
router.get('/:id*', rest.asyncwrap(get));

module.exports = router;