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
        reject({success: false, message: "User creation failed", data: result})
      } else {
        resolve({success: true, message: "User created successfully", data: result})
      }
    })
  })
}

module.exports.deleteOne = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).remove().then(result => {
      if(JSON.parse(result).n != 1) {
        reject({success: false, message: "Failed to delete user", data: result})
      } else {
        resolve({success: true, message: "User deleted successfully", data: result})
      }
    })
  })
}

module.exports.exists = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).then(result => {
      if(result == null) {
        resolve({success: true, message: `${Object.keys(userObject)[0]} doesn't exist`, data: result})
      } else {
        reject({success: false, message: `${Object.keys(userObject)[0]} already exists`, data: result})
      }
    })
  })
}

module.exports.getOne = function(userObject) {
  return new Promise((resolve, reject) => {
    User.findOne(userObject).then(result => {
      if(result == null) {
        reject({success: false, message: "User not found"})
      } else {
        resolve(result)
      }
    })
  })
}

module.exports.getAll = function() {
  return new Promise((resolve, reject) => {
    User.find({}).then(result => {
      if(result.length == 0) {
        reject({success: false, message: "No users found"})
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
        reject({success: false, message: "Email address already in use", data: result})
      }
    })
    User.findOne({username: userObject.username})
    .then(result => {
      if(result != null && result._id != userObject._id) {
        reject({success: false, message: "Username address already in use", data: result})
      }
    })
    User.update({_id: userObject._id}, userObject).then(result => {
      if(result.nModified == 0) {
        resolve({success: true, message: "Nothing to update"})
      } else if (result.nModified >= 1) {
        resolve({success: true, message: "User updated", data: result})
      } else {
        reject({success: false, message: "User updated failed", data: result})
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
