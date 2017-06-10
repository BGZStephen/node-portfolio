const mongoose = require('mongoose')
const config = require('../config/database')

const TechnologySchema = mongoose.Schema({
  createdOn: Date,
  name: String,
  imageUrl: String
})

const Technology = module.exports = mongoose.model('Technology', TechnologySchema)

module.exports.create = function(technologyObject) {
  return new Promise((resolve, reject) => {
    technologyObject.save().then(result => {
      if(result == null) {
        reject({success: false, message: "Failed to save work technology", data: result})
      } else {
        resolve({success: true, message: "Technology saved successfully", data: result})
      }
    })
  })
}

module.exports.deleteOne = function(technologyObject) {
  return new Promise((resolve, reject) => {
    Technology.findOne(technologyObject).remove().exec().then(result => {
      if(JSON.parse(result).n != 1) {
        reject({success: false, message: "Failed to delete technlogy", data: result})
      } else {
        resolve({success: true, message: "Technology deleted successfully", data: result})
      }
    })
  })
}

module.exports.getAll = function() {
  return new Promise((resolve, reject) => {
    Technology.find({}).then(result => {
      if(result.length == 0) {
        reject({success: false, message: "Work examples not found", data: result})
      } else {
        resolve({success: true, message: "Work examples found", data: result})
      }
    })
  })
}

module.exports.getOne = function(technologyObject) {
  return new Promise((resolve, reject) => {
    Technology.findOne(technologyObject).then(result => {
      if(result == null) {
        reject({success: false, message: "Technology not found, does it exist?", data: result})
      } else {
        resolve({success: true, message: "Technology found", data: result})
      }
    })
  })
}

module.exports.updateTechnology = function(technologyObject) {
  return new Promise((resolve, reject) => {
    Technology.update({_id: technologyObject._id}, technologyObject).then(result => {
      if(result.nModified == 0) {
        resolve({success: true, message: "Nothing to update"})
      } else if (result.nModified >= 1) {
        resolve({success: true, message: "Technology updated", data: result})
      } else {
        reject({success: false, message: "Technology update failed", data: result})
      }
    })
  })
}
