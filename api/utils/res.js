// async wrapper to catch errors from async  route calls.
function asyncwrap(fn) {
	const ctx = this;

	return function(req, res, next) {
		return fn.call(ctx, req, res, next).catch(next);
	};
}

module.exports = {
	asyncwrap,
};
