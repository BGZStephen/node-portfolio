const debug = require('debug')('error-utils');

function logErrors(err, req, res, next) {
	if (global.ENV === 'development' || global.ENV === 'testing') {
		debug(err);
	}
	next(err);
}

// handle all express generated errors with stacks
function errorHandler(err, req, res, next) {
	return res.status(err.statusCode || 500).json(err);
}

module.exports = {
	logErrors,
	errorHandler,
};
