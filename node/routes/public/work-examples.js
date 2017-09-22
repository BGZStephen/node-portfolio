const mongoose = require('mongoose')
const config = require('../../config');
const WorkExample = require('../../models/work-example');
const cloudinary = require('cloudinary')

async function getAll (req, res, next) {
  if(!req.get('Authorization') || req.get('Authorization') !== config.authorization) {
    return res.status(401).json({error: "Authorisation token not supplied"})
  }

  try {
    const workExamples = await WorkExample.getAll()
    res.json(workExamples)
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
    const workExamples = await WorkExample.getOne(req.params.id)
    res.json(workExamples)
  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
}

async function uploadImage(req, res, next) {
  console.log(req.file);
  console.log(req.body.workExampleId);
  const workExample = await WorkExample.getOne(req.body.workExampleId);
  const cloudinaryFile = await cloudinary.uploader.upload(req.file.path);
  workExample.images.push(cloudinaryFile.secure_url);
  workExample.markModified('images')
  workExample.save()
  .then(workExample => {
    console.log(workExample)
  })
}

module.exports = {
  getAll,
  getOne,
  uploadImage
}
