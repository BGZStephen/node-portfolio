const async = require('asyncawait/async');
const await = require('asyncawait/await');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const config = require('../config');
const WorkExample = require('../models/work-example');

router.get("", (req, res, next) => {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  WorkExample.get(req.query)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/create", (req, res, next) => {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let workExampleObject = new WorkExample({
    createdOn: new Date(),
    description: req.body.description,
    githubUrl: req.body.githubUrl,
    imageUrl: req.body.imageUrl,
    technologies: req.body.technologies,
    title: req.body.title,
    type: req.body.type,
    url: req.body.url
  })

  WorkExample.create(workExampleObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/deleteOne", (req, res, next) => {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let workExampleObject = {
    _id: req.body._id
  }

  WorkExample.deleteOne(workExampleObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/update", (req, res, next) => {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let workExampleObject = {
    _id: req.body._id,
    description: req.body.description,
    githubUrl: req.body.githubUrl,
    imageUrl: req.body.imageUrl,
    technologies: req.body.technologies,
    title: req.body.title,
    type: req.body.type,
    url: req.body.url
  }

  WorkExample.updateWorkExample(workExampleObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

module.exports = router
