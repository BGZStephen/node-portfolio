const router = require('express').Router();
const { onlyAuthenticated } = require('api/services/auth');

router.all('/*', onlyAuthenticated);

router.use('/users', require('./users'));
router.use('/work-examples', require('./work-examples'));
router.use('/technologies', require('./technologies'));
router.use('/images', require('./images'));

module.exports = router;
