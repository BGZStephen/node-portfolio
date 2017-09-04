const mongoose = require('mongoose')
const config = require('../config')

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
        reject("Failed to save work technology")
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.deleteOne = function(technologyObject) {
  return new Promise((resolve, reject) => {
    Technology.findOne(technologyObject).remove().exec().then(result => {
      if(JSON.parse(result).n != 1) {
        reject("Failed to delete technlogy")
      } else {
        resolve()
      }
    })
  })
}

module.exports.get = function(technologyObject) {
  return new Promise((resolve, reject) => {
    Technology.find(technologyObject).then(result => {
      if(result == null) {
        reject("Technology not found, does it exist?")
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.updateTechnology = function(technologyObject) {
  return new Promise((resolve, reject) => {
    Technology.update({_id: technologyObject._id}, technologyObject).then(result => {
      if(result.nModified == 0) {
        reject("Nothing to update")
      } else if (result.nModified >= 1) {
        resolve(result)
      } else {
        reject("Technology update failed")
      }
    })
  })
}
