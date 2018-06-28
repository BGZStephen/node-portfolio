const router = require('express').Router();
const authorizeRoute = require('api/services/auth.js').authorizeRoute;

router.all('*', authorizeRoute);
router.use('/users', require('./users'));
router.use('/work-examples', require('./work-examples'));
router.use('/images', require('./images'));

module.exports = router;
