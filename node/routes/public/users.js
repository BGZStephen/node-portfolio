const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('../../config');
const User = require('../../models/user');

async function authenticate (req, res) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let userObject = {
    email: req.body.email,
    password: req.body.password
  }

  let userResult = await(User.getOne({email: userObject.email}));
  userObject.userId = userResult.data._id
  userObject.username = userResult.data.username

  await User.comparePassword({queryPassword: userObject.password, password: userResult.data.password});

  try {
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
  } catch(error) {
    console.log(error)
    res.json({success: false, message: error.message})
  }
}

async function create (req, res) {
  console.log(req.get('Authorization'))
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
