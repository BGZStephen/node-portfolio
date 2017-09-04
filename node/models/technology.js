const mongoose = require('mongoose')
const config = require('../config')

const TechnologySchema = mongoose.Schema({
  createdOn: Date,
  name: String,
  imageUrl: String
})

const Technology = module.exports = mongoose.model('Technology', TechnologySchema)

module.exports.create = function(technologyObject) {
  technologyObject.save()
  .then(result => {
    return technology;
  })
}

module.exports.deleteOne = function(technologyObject) {
  Technology.findOne(technologyObject)
  .remove()
  .then(result => {
    return result
  })
}

module.exports.get = function(technologyObject) {
  Technology.find(technologyObject)
  .then(technology => {
    return technology
  })
}

module.exports.updateTechnology = function(technologyObject) {
  Technology.update({_id: technologyObject._id}, technologyObject)
  .then(updatedTechnology => {
    return updatedTechnology
  })
}
