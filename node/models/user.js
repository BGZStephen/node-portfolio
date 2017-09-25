const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
	createdOn: Date,
	email: {
		type: String,
		unique: true
	},
	firstName: String,
	lastName: String,
	password: String,
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.create = function(userObject) {
	userObject.password = bcrypt.hashSync(userObject.password, 10);
	return userObject.save();
};

module.exports.exists = function(userObject) {
	return User.findOne(userObject);
};

module.exports.deleteOne = function(userObject) {
	return User.findOne(userObject).remove();
};

module.exports.getOne = function(userObject) {
	return User.findOne(userObject);
};

module.exports.getAll = function() {
	return User.find({});
};

module.exports.updateUser = function(userObject) {
	return User.update({_id: userObject._id}, userObject);
};

module.exports.updatePassword = function(userObject) {
	userObject.newPassword = bcrypt.hashSync(userObject.newPassword, 10);
	return User.update({_id: userObject._id}, {password: userObject.newPassword});
};
