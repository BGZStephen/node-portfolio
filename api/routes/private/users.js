const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const router = require('express').Router();
const rest = require('api/utils/rest');
const _ = require('lodash');
const User = mongoose.model('User');
const ObjectId = mongoose.Types.ObjectId;

async function load(req, res, next) {
	const userId = req.params.id;
	if (!userId) {
		res.send(500).json({
			message: 'No User ID provided',
		});
	}

	const user = await User.findById(userId);
	if (!user) {
		return res.send(400).json({
			message: 'User not found',
		});
	}

	req.context.user = user;
	next();
}

async function getOne(req, res) {
	const user = req.user;
	res.json(user);
}

async function update(req, res) {
	const user = req.user;
	const updatableFields = ['email', 'firstName', 'lastName'];

	if (req.body.password) {
		const passwordVerification = verifyPassword(
			req.body.password,
			user.password,
		);
		if (!passwordVerification) {
			return res.send(500).json({
				message: 'Current password does not match stored password',
			});
		}
		updateParams.password = bcrypt.hashSync(updateParams.password, 10);
	}

	const duplicateUserEmail = await User.findOne({ email: req.body.email });

	if (
		duplicateUserEmail &&
		!ObjectId(duplicateUserEmail._id).equals(user._id)
	) {
		return res.status(500).send({
			message: 'Email address already in use',
		});
	}

	user = _.assign(user, _.pick(req.body, updatableFields));

	await user.save();
	res.json(user);
}

function verifyPassword(passwordQuery, password) {
	return bcrypt.compareSync(passwordQuery, password);
}

router.all('/:id*', rest.asyncwrap(load));
router.get('/:id', rest.asyncwrap(getOne));

module.exports = router;
