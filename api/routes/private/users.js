const User = require('../../models/user');
const winston = require('winston');

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
		const user = await User.getOne({_id: req.body.userId});
		if (!user) {
			return res.send(400).json({
				message: 'User not found'
			});
		}
		res.json(user);
	} catch(error) {
		winston.error(error);
		res.status(500).json(error);
	}
}

async function update (req, res) {
	const updateParams = {
		_id: req.body.userId,
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
	};

	try {
		const userEmailExists = await User.getOne({email: req.body.email});
		if (userEmailExists && userEmailExists._id.toString() !== updateParams._id.toString()) {
			return res.status(500).send({
				message: 'Email address already in use'
			});
		}

		const user = await User.update(updateParams);
		res.json(user);
	} catch(error) {
		winston.error(error);
		res.status(500).send(error);
	}
}

module.exports = {
	fetchUser,
	getOne,
	update
};
