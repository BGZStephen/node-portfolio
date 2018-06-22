const router = require('express').Router();
const authorizeRoute = require('api/services/auth.js').authorizeRoute;

router.all('*', authorizeRoute);
router.all('/users', require('./users'));
router.all('/work-examples', require('./work-examples'));
router.all('/images', require('./images'));

module.exports = router;
