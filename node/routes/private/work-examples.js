const mongoose = require('mongoose')
const config = require('../../config');
const WorkExample = require('../../models/work-example');

async function getAll (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  try {
    const workExamples = await WorkExample.get(req.query)
    res.json(workExamples)
  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function create (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  const workExampleObject = new WorkExample({
    createdOn: new Date(),
    description: req.body.description,
    githubUrl: req.body.githubUrl,
    images: req.body.images,
    technologies: req.body.technologies,
    summary: req.body.summary,
    title: req.body.title,
    type: req.body.type,
    url: req.body.url
  })

  try {
    await WorkExample.create(workExampleObject)
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
    await WorkExample.deleteOne({_id: req.body._id})
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function update (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  let workExampleObject = {
    _id: req.body._id,
    description: req.body.description,
    githubUrl: req.body.githubUrl,
    images: req.body.images,
    technologies: req.body.technologies,
    summary: req.body.summary,
    title: req.body.title,
    type: req.body.type,
    url: req.body.url
  }

  try {
    const workExample = await WorkExample.updateWorkExample(workExampleObject)
    res.json(workExample)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

module.exports = {
  deleteOne,
  getAll,
  create,
  update
}
