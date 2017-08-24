const async = require('asyncawait/async');
const await = require('asyncawait/await');
const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();
const config = require('../config');
const Technology = require('../models/technology');

router.get("", (req, res, next) => {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  Technology.get(req.query)
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
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

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
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  Technology.getAll()
  .then(result => {
    res.json(result)
  }).catch(error => {
    console.log(error)
    res.json({success: false, message: error.message})
  })
})

router.post("/getById", (req, res, next) => {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let technologyObject = {
    _id: req.body.technologyId,
  }

  Technology.getOne(technologyObject)
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

  let technologyObject = {
    _id: req.body._id,
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
