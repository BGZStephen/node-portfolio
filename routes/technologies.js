const async = require('asyncawait/async');
const await = require('asyncawait/await');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Technology = require('../models/technology');

router.post("/create", (req, res, next) => {
  let technologyObject = new Technology({
    createdOn: new Date(),
    imageUrl: req.body.imageUrl,
    name: req.body.name
  })

  Technology.create(technologyObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/deleteOne", (req, res, next) => {
  let technologyObject = {
    _id: req.body.technologyId
  }

  Technology.deleteOne(technologyObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.get("/getAll", (req, res, next) => {

  Technology.getAll()
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/update", (req, res, next) => {
  let technologyObject = {
    _id: req.body.technologyId,
    imageUrl: req.body.imageUrl,
    name: req.body.name
  }

  Technology.updateTechnology(technologyObject)
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

module.exports = router
