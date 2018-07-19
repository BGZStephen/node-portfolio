const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/work-examples', require('./work-examples'));

module.exports = router;
