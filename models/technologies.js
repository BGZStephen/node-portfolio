const mongoose = require('mongoose')
const config = require('../config/database')

const TechnologiesSchema = mongoose.Schema({
  createdOn: Date,
  name: String,
  imageUrl: String
})

const Technology = module.exports = mongoose.model('Technology', TechnologySchema)
