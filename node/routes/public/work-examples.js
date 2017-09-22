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
  console.log(req.file)
  cloudinary.uploader.upload(req.file.path, function(result) {
    console.log(result)
  });

}

module.exports = {
  getAll,
  getOne,
  uploadImage
}
