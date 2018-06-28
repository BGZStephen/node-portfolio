const router = require('express').Router();
const authorizeRoute = require('../../services/auth.js').authorizeRoute;

router.use('/users', require('./users'));
router.use('work-examples', require('./work-examples'));

module.exports = router;
