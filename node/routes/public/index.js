const config = require('../../config');
const router = require('express').Router()
const Users = require('./users');

router.post("users/authenticate", Users.authenticate);
router.put("users", Users.update);

module.exports = router
