const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('../../config');
const User = require('../../models/user');

async function getByEmail (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  try {
    const user = await User.getOne(req.body.email)
    res.json(user)
  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function getOne (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  try {
    const user = await User.getOne({_id: req.body.userId})
    res.json(user)
  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function update (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let userObject = {
    _id: req.body.userId,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
  }

  try {
    await User.exists({email: userObject.email})
    await User.exists({username: userObject.username})
    const updatedUser = await User.update(userObject)
    res.json(updatedUser)
  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
}

module.exports = {
  getByEmail,
  getOne,
  update
}
