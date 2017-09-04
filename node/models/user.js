const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const config = require('../config')

const UserSchema = mongoose.Schema({
  createdOn: Date,
  email: {
    type: String,
    unique: true
  },
  firstName: String,
  lastName: String,
  password: String,
})

const User = module.exports = mongoose.model('User', UserSchema)

module.exports.create = function(userObject) {
  userObject.password = bcrypt.hashSync(userObject.password, 10)
  userObject.save()
  .then(result => {
    return result;
  })
}

module.exports.exists = function(userObject) {
  const searchType = Object.keys(userObject)[0]
  User.findOne(userObject)
  .then(result => {
    return result;
  })
}

module.exports.deleteOne = function(userObject) {
  User.findOne(userObject)
  .remove()
  .then(result => {
    return result;
  })
}

module.exports.getOne = function(userObject) {
  User.findOne(userObject)
  .then(user => {
    return user;
  })
}

module.exports.getAll = function() {
  User.find({})
  .then(users => {
    return users;
  })
}

module.exports.updateUser = function(userObject) {
  User.update({_id: userObject._id}, userObject)
  .then(result => {
    return result;
  })
}

module.exports.updatePassword = function(userObject) {
  userObject.newPassword = bcrypt.hashSync(userObject.newPassword, 10)
  User.update({_id: userObject._id}, {password: userObject.newPassword})
  .then(updatedUser => {
    return updatedUser;
  })
}
