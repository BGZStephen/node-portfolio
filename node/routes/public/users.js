const config = require('../../config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../../models/user');

async function authenticate (req, res) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let userObject = {
    email: req.body.email,
    password: req.body.password
  }

  const comparisonUser = await(User.getOne({email: userObject.email}));
  userObject.userId = comparisonUser._id
  userObject.username = comparisonUser.username

  try {
    if(await bcrypt.compare(req.body.password, comparisonUser.password)) {
      const token = jwt.sign(userObject, config.secret, {expiresIn: 604800});
      res.json({
        success: true,
        message: "Authentication successful",
        token: "JWT" + token,
        user: {
          email: userObject.email,
          userId: userObject.userId,
          username: userObject.username
        }
      })
    } else {
      res.sendStatus(403);
    }
  } catch(error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
}

async function create (req, res) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let userObject = new User({
    createdOn: new Date(),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  })

  try {
    await User.exists({email: userObject.email});
    await User.exists({username: userObject.username});
    const createdUser = await User.create(userObject)
    res.json(createdUser)
  }
  catch(error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
}

module.exports = {
  authenticate,
  create,
}
