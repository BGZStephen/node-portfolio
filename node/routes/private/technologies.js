const mongoose = require('mongoose')
const config = require('../../config');
const Technology = require('../../models/technology');

async function getAll (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }


  try {
    const technology = await Technology.get(req.query)
    res.json(technology)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function create (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  const technologyObject = new Technology({
    createdOn: new Date(),
    imageUrl: req.body.imageUrl,
    name: req.body.name
  })

  try {
    await Technology.create(technologyObject)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function deleteOne (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  try {
    await Technology.deleteOne({_id: req.body.technologyId})
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function getOne (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  try {
    const technology = await Technology.getOne({_id: req.body.technologyId})
    res.json(technology)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function update (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let technologyObject = {
    _id: req.body._id,
    imageUrl: req.body.imageUrl,
    name: req.body.name
  }

  try {
    const technology = await Technology.updateTechnology(technologyObject)
    res.json(technology)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
