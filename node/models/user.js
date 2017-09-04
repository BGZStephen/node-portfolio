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
  // encrypt password
  userObject.password = bcrypt.hashSync(userObject.password, 10)

  //save user
  return new Promise((resolve, reject) => {
    userObject.save().then(result => {
      if(result == null) {
        reject("User creation failed")
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.deleteOne = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).remove().then(result => {
      if(JSON.parse(result).n != 1) {
        reject("Failed to delete user")
      } else {
        resolve()
      }
    })
  })
}

module.exports.getOne = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).then(result => {
      if(result == null) {
        reject("User not found")
      }
    })
  })
}

module.exports.getAll = function() {
  return new Promise((resolve, reject) => {
    User.find({}).then(result => {
      if(result.length == 0) {
        reject("No users found")
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.updateUser = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne({email: userObject.email})
    .then(result => {
      if(result != null && result._id != userObject._id) {
        reject("Email address already in use")
      }
    })
    User.findOne({username: userObject.username})
    .then(result => {
      if(result != null && result._id != userObject._id) {
        reject("Username address already in use")
      }
    })
    User.update({_id: userObject._id}, userObject).then(result => {
      if(result.nModified == 0) {
        reject({message: "Nothing to update"})
      } else if (result.nModified >= 1) {
        resolve({data: result})
      } else {
        reject("User updated failed")
      }
    })
  })
}

module.exports.updatePassword = function(userObject) {

  // encrypt password
  userObject.newPassword = bcrypt.hashSync(userObject.newPassword, 10)

  return new Promise((resolve, reject) => {
    User.update({_id: userObject._id}, {password: userObject.newPassword}).then(result => {
      if (result.nModified >= 1) {
        resolve({success: true, message: "User password updated", data: result})
      } else {
        reject({success: false, message: "User password updated failed", data: result})
      }
    })
  })
}
