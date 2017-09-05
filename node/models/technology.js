const mongoose = require('mongoose')
const config = require('../config')

const TechnologySchema = mongoose.Schema({
  createdOn: Date,
  name: String,
  imageUrl: String
})

const Technology = module.exports = mongoose.model('Technology', TechnologySchema)

module.exports.create = function(technologyObject) {
  return technologyObject.save()
}

module.exports.deleteOne = function(technologyObject) {
  return Technology.findOne(technologyObject).remove()
}

module.exports.get = function(technologyObject) {
  return Technology.find(technologyObject)
}

module.exports.updateTechnology = function(technologyObject) {
  return Technology.update({_id: technologyObject._id}, technologyObject)
}
