const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
	createdOn: Date,
	email: {
		type: String,
		unique: true,
	},
	name: String,
	password: String,
	active: { type: Boolean, default: false },
});

UserSchema.pre('save', function() {
	if (this.isModified('password')) {
		this.password = bcrypt.hashSync(this.password, 8);
	}
});

UserSchema.methods = {
	passwordsMatch(password) {
		return bcrypt.compareSync(password, this.password);
	},
};

module.exports = mongoose.model('User', UserSchema);
