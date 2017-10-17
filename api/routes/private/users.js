const winston = require('winston');
const bcrypt = require('bcryptjs');
const buildUpdateObject = require('../../utils').buildUpdateObject;
const mongoose = require('mongoose');
const User = mongoose.model('User');

async function fetchUser(req, res, next) {
	const userId = req.params.id;
	if (!userId) {
		res.send(500).json({
			message: 'No User ID provided'
		});
	}

	try {
		const user = await User.findById(userId);
		if (!user) {
			return res.send(400).json({
				message: 'User not found'
			});
		}
		req.user = user;
		next();
	} catch (error) {
		winston.error(error);
		res.status(500).json(error);
	}
}

async function getOne (req, res) {
	try {
		const user = req.user;
		res.json(user);
	} catch(error) {
		winston.error(error);
		res.status(500).json(error);
	}
}

async function update (req, res) {
	const user = req.user;
	const updatableFields = 'email firstName lastName';
	if (!user) {
		return res.status(404).json({
			message: 'User not found'
		});
	}

	const updateParams = buildUpdateObject(req.body, updatableFields);

	try {
		if (req.body.password) {
			const passwordVerification = verifyPassword(req.body.password, user.password);
			if (!passwordVerification) {
				return res.send(500).json({
					message: 'Current password does not match stored password'
				});
			}
			updateParams.password = bcrypt.hashSync(updateParams.password, 10);
		}
	} catch (error) {
		winston.error(error);
		res.status(500).json(error);
	}

	try {
		const duplicateEmailCheck = await User.findOne({email: req.body.email});
		if (!duplicateEmailCheck || duplicateEmailCheck._id.toString() !== updateParams._id.toString()) {
			return res.status(500).send({
				message: 'Email address already in use'
			});
		}
	} catch(error) {
		winston.error(error);
		res.status(500).json(error);
	}

	for (const param in updateParams) {
		user[param] = updateParams[param];
	}

	await user.save();
	res.json(user);
}

function verifyPassword(passwordQuery, password) {
	return bcrypt.compareSync(passwordQuery, password);
}

module.exports = {
	fetchUser,
	getOne,
	update
};
