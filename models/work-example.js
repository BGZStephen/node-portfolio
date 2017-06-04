const mongoose = require('mongoose')
const config = require('../config/database')

const WorkExampleSchema = mongoose.Schema({
  categories: Array,
  createdOn: Date,
  description: String,
  githubUrl: String,
  imageUrl: String,
  technologies: Array,
  title: String,
  type: String,
  url: String
})

const WorkExample = module.exports = mongoose.model('WorkExample', WorkExampleSchema)
