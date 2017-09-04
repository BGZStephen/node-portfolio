const mongoose = require('mongoose')
const config = require('../config')
const TechnologySchema = require('./technology').schema

const WorkExampleSchema = mongoose.Schema({
  createdOn: Date,
  description: String,
  githubUrl: String,
  imageUrl: String,
  technologies: [TechnologySchema],
  title: String,
  type: String,
  url: String
})

const WorkExample = module.exports = mongoose.model('WorkExample', WorkExampleSchema)

module.exports.create = function(workExampleObject) {
  return new Promise((resolve, reject) => {
    workExampleObject.save().then(result => {
      if(result == null) {
        reject("Failed to save work example")
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.deleteOne = function(workExampleObject) {
  return new Promise((resolve, reject) => {
    WorkExample.findOne(workExampleObject).remove().exec().then(result => {
      if(JSON.parse(result).n != 1) {
        reject("Failed to delete work example")
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.get = function(workExampleObject) {
  return new Promise((resolve, reject) => {
    WorkExample.find(workExampleObject).then(result => {
      if(result.length == 0) {
        reject("Work examples not found")
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.getOne = function(workExampleId) {
  return new Promise((resolve, reject) => {
    WorkExample.findById(workExampleId).then(result => {
      if(result.length == 0) {
        reject("Work example not found")
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.updateWorkExample = function(workExampleObject) {
  return new Promise((resolve, reject) => {
    WorkExample.update({_id: workExampleObject._id}, workExampleObject).then(result => {
      if(result.nModified == 0) {
        reject("Nothing to update")
      } else if (result.nModified >= 1) {
        resolve(result)
      } else {
        reject("Work example update failed")
      }
    })
  })
}
