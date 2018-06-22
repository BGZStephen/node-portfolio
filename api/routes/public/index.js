const router = require('express').Router();
const authorizeRoute = require('../../services/auth.js').authorizeRoute;

router.all('*', authorizeRoute);
router.all('/users', require('./users'));
router.all('work-examples', require('./work-examples'));

module.exports = router;
