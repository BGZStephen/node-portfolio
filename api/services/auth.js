const config = require('../config');
const jwt = require('jsonwebtoken');

function verifyJWT(req, res, next) {
	if (ENV === 'development') {
		return next();
	}

	const token = req.get('x-access-token');

	try {
		jwt.verify(token, config.secret);
	} catch (err) {
		return res.error({ statusCode: 400, message: 'Unauthorized access' });
	}

	next();
}

module.exports = {
	verifyJWT,
};
