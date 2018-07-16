const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/work-examples', require('./work-examples'));
router.use('/technologies', require('./technologies'));
router.use('/images', require('./images'));

module.exports = router;
