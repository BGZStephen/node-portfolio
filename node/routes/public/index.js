const config = require('../../config');
const router = require('express').Router()
const Users = require('./users');

router.post("users/authenticate", Users.authenticate);
router.post("users", Users.create);

module.exports = router
