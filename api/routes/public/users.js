const config = require('../../config');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const rest = require('api/utils/rest');
const validate = require('api/utils/validate');
const _ = require('lodash');

const User = mongoose.model('User');

async function authenticate(req, res) {
  const user = await User.findOne({email: req.body.email});

  if (!user) {
    return res.error({message: 'User not found', statusCode: 404});
  }

  if (!user.passwordsMatch(req.body.password)) {
    return res.error({message: 'Authentication failed', statusCode: 403});
  }

  const token = jwt.sign(_.pick(user, ['name', 'email', '_id']), config.secret, {expiresIn: 604800});
  res.json({
    token: token,
    user: {
      id: user._id,
    },
  });
}

async function create(req, res) {
  const validationErrors = validate(req.body, {
    name: {presence: true},
    email: {presence: true},
    password: {presence: true},
  });

  if (validationErrors) {
    return res.error({statusCode: 400, message: validationErrors});
  }

  const fields = ['name', 'email', 'password'];

  const user = new User(_.pick(req.body, fields));

  await user.save();

  res.json(user);
}

router.post('/authenticate', rest.asyncwrap(authenticate));
router.post('/', rest.asyncwrap(create));

module.exports = router;
