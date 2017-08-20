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
        reject({success: false, message: "Failed to save work example", data: result})
      } else {
        resolve({success: true, message: "Work example saved successfully", data: result})
      }
    })
  })
}

module.exports.deleteOne = function(workExampleObject) {
  return new Promise((resolve, reject) => {
    WorkExample.findOne(workExampleObject).remove().exec().then(result => {
      if(JSON.parse(result).n != 1) {
        reject({success: false, message: "Failed to delete work example", data: result})
      } else {
        resolve({success: true, message: "Work example deleted successfully", data: result})
      }
    })
  })
}

module.exports.get = function(workExampleObject) {
  return new Promise((resolve, reject) => {
    WorkExample.find(workExampleObject).then(result => {
      if(result.length == 0) {
        reject({success: false, message: "Work examples not found", data: result})
      } else {
        resolve({success: true, message: "Work examples found", data: result})
      }
    })
  })
}

module.exports.updateWorkExample = function(workExampleObject) {
  return new Promise((resolve, reject) => {
    WorkExample.update({_id: workExampleObject._id}, workExampleObject).then(result => {
      if(result.nModified == 0) {
        resolve({success: true, message: "Nothing to update"})
      } else if (result.nModified >= 1) {
        resolve({success: true, message: "Work example updated", data: result})
      } else {
        reject({success: false, message: "Work example update failed", data: result})
      }
    })
  })
}
