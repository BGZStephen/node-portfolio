const config = require('../../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const router = require('express').Router();
const rest = require('api/utils/rest');

async function authenticate(req, res) {
	const user = await User.findOne({email: req.body.email});

	if (!user) {
		return res.status(404).json({
			message: 'User not found',
		});
	}

	if (!(await bcrypt.compare(req.body.password, user.password))) {
		return res.status(403).send({
			message: 'Authentication failed',
		});
	}

	const token = jwt.sign(authParams, config.secret, {expiresIn: 604800});
	res.json({
		success: true,
		message: 'Authentication successful',
		token: token,
		user: {
			id: user._id,
		},
	});
}

router.post('/authenticate', rest.asyncwrap(authenticate));

module.exports = router;
