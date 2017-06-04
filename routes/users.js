const async = require('asyncawait/async');
const await = require('asyncawait/await');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const User = require('../models/user');

router.post("/authenticate", (req, res, next) => {
  let userObject = {
    email: req.body.email,
    password: req.body.password
  }

  let authenticateUser = async (function (userObject) {
    let userResult = await(User.getOne({email: userObject.email}));
    return User.comparePassword({queryPassword: userObject.password, password: userResult.data.password});
  })

  authenticateUser(userObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })

})

router.post("/create", (req, res, next) => {
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

router.post("/deleteOne", (req, res, next) => {
  let userObject = {
    _id: req.body.userId,
  }

  let deleteUser = async (function (userObject) {
    await(User.exists(userObject));
    return User.deleteOne(userObject);
  })

  deleteUser(userObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.get("/getAll", (req, res, next) => {

  User.getAll()
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/getEmail", (req, res, next) => {
  let userObject = {
    email: req.body.email,
  }

  User.getOne(userObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/getUserById", (req, res, next) => {
  let userObject = {
    _id: req.body.userId,
  }

  User.getOne(userObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/getByUsername", (req, res, next) => {
  let userObject = {
    username: req.body.username,
  }

  User.getOne(userObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/update", (req, res, next) => {
  let userObject = {
    _id: req.body.userId,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
  }

  User.updateUser(userObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/updatePassword", (req, res, next) => {
  let userObject = {
    _id: req.body.userId,
    queryPassword: req.body.currentPassword,
    newPassword: req.body.newPassword
  }

  let updatePassword = async (function (userObject) {
    let currentUserObject = await(User.getOne({_id: userObject._id}))
    await(User.comparePassword({queryPassword: userObject.queryPassword, password: currentUserObject.data.password}))
    return User.updatePassword(userObject)
  })

  updatePassword(userObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

module.exports = router
