const async = require('asyncawait/async');
const await = require('asyncawait/await');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Technology = require('../models/user');

router.post("/create", (req, res, next) => {
  let technologyObject = new Technology({
    createdOn: new Date(),
    imageUrl: req.body.imageUrl,
    name: req.body.name
  })

  let createTechnology = async(function(technologyObject) => {
    return Technology.create(technologyObject)
  })

  createTechnology(technologyObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/deleteOne", (req, res, next) => {
  let technologyObject = new Technology({
    _id: req.body.technologyId
  })

  let deleteTechnology = async(function(technologyObject) => {
    return Technology.deleteOne(technologyObject)
  })

  deleteTechnology(technologyObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.get("/getAll", (req, res, next) => {

  let getAllTechnologies = async(function() => {
    return Technology.getAll()
  })

  getAllTechnologies()
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/update", (req, res, next) => {
  let technologyObject = new Technology({
    _id: req.body.technologyId,
    imageUrl: req.body.imageUrl,
    name: req.body.name
  })

  let updateTechnology = async(function(technologyObject) => {
    return Technology.updateTechnology(technologyObject)
  })

  updateTechnology(technologyObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

module.exports = router
