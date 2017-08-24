const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const config = require('../../config');
const User = require('../../models/user');

router.post("/authenticate", (req, res, next) => {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let userObject = {
    email: req.body.email,
    password: req.body.password
  }

  let authenticateUser = async (function (userObject) {
    let userResult = await(User.getOne({email: userObject.email}));
    userObject.userId = userResult.data._id
    userObject.username = userResult.data.username
    return User.comparePassword({queryPassword: userObject.password, password: userResult.data.password});
  })

  authenticateUser(userObject)
  .then(() => {
    const token = jwt.sign(userObject, config.secret, {expiresIn: 604800});
    return res.json({
      success: true,
      message: "Authentication successful",
      token: "JWT" + token,
      user: {
        email: userObject.email,
        userId: userObject.userId,
        username: userObject.username
      }
    })
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/create", (req, res, next) => {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let userObject = new User({
    createdOn: new Date(),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    username: req.body.username,
  })

  let createUser = async (function (userObject) {
    await(User.exists({email: userObject.email}));
    await(User.exists({username: userObject.username}));
    return User.create(userObject);
  })

  createUser(userObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})
