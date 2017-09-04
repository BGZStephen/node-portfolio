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
  workExampleObject.save()
  .then(workExample => {
    return workExample;
  })
}

module.exports.deleteOne = function(workExampleObject) {
  WorkExample.findOne(workExampleObject).remove()
  .then(result => {
    return result;
  })
}

module.exports.getAll = function(workExampleObject) {
  WorkExample.find(workExampleObject)
  .then(workExamples => {
    return workExamples
  })
}

module.exports.getOne = function(workExampleId) {
  WorkExample.findById(workExampleId)
  .then(workExample => {
    return workExample
  })
}

module.exports.updateWorkExample = function(workExampleObject) {
  WorkExample.update({_id: workExampleObject._id}, workExampleObject)
  .then(updatedWorkExample => {
    return updatedWorkExample;
  })
}
