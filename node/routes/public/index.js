const config = require('../../config');
const router = require('express').Router()
const Users = require('./users');
const WorkExamples = require('./work-examples');

router.post("/users/authenticate", Users.authenticate);
router.post("/users", Users.create);

router.get("/work-examples", WorkExamples.getAll);
router.get("/work-examples/:id", WorkExamples.getOne);

module.exports = router
