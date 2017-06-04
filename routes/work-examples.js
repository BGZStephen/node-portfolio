const async = require('asyncawait/async');
const await = require('asyncawait/await');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const WorkExample = require('../models/work-example');

router.post("/create", (req, res, next) => {
  let workExampleObject = new WorkExample({
    categories: req.body.categories,
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
  let workExampleObject = {
    _id: req.body.workExampleId
  }

  WorkExample.deleteOne(workExampleObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.get("/getAll", (req, res, next) => {

  WorkExample.getAll()
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/getByType", (req, res, next) => {
  let workExampleObject = {
    type: req.body.type
  }

  WorkExample.getByType(workExampleObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/update", (req, res, next) => {
  let workExampleObject = {
    _id: req.body.workExampleId,
    categories: req.body.categories,
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
