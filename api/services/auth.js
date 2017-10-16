const config = require('../config');

function authorizeRoute(req, res, next) {
  if (ENV === 'development') {
    return next();
  }

  const AuthorizationToken = req.get('Authorization');
  if (!AuthorizationToken || AuthorizationToken !== config.authorization) {
    res.status(401).json({
      message: 'Unauthorized access'
    });
  }

  next();
}

module.exports = {
  authorizeRoute,
};
