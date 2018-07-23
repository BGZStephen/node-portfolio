const config = require('../config');
const jwt = require('jsonwebtoken');

function isJWTValid(token) {
  try {
    jwt.verify(token, config.secret);
	} catch (err) {
    return false;
  }
  
	return true;
}

function onlyAuthenticated(req, res, next) {
  const token = req.get('x-access-token');

  if (!isJWTValid(token)) {
    return res.error({statusCode: 403, message: 'Unauthorized'});
  }

  next();
}

module.exports = {
  isJWTValid,
  onlyAuthenticated
};
