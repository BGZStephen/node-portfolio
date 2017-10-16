const config = require('../../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/user');
const winston = require('winston');

async function authenticate (req, res) {
	const authParams = {
		email: req.body.email,
		password: req.body.password
	};

	const user = await User.findOne({email: authParams.email});

	if (!user) {
		return res.status(404).json({
			message: 'User not found'
		});
	}

	try {
		if (await bcrypt.compare(req.body.password, user.password)) {
			const token = jwt.sign(authParams, config.secret, {expiresIn: 604800});
			res.json({
				success: true,
				message: 'Authentication successful',
				token: token,
				user: {
					id: authParams.userId,
				}
			});
		} else {
			res.status(403).send({
				message: 'Authentication failed'
			});
		}
	} catch (error) {
		winston.error(error);
		res.status(500).json(error);
	}
}

module.exports = {
	authenticate,
};
