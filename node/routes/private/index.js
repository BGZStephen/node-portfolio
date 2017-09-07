const config = require('../../config');
const router = require('express').Router();
const Users = require('./users');
const WorkExamples = require('./work-examples');

router.get("users/:id", Users.getOne);

router.get("wrok-examples", WorkExamples.getAll);
router.post("wrok-examples", WorkExamples.create);
router.delete("wrok-examples/:id", WorkExamples.deleteOne);
router.put("wrok-examples/:id", WorkExamples.update);

module.exports = router
