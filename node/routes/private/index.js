const config = require('../../config');
const router = require('express').Router();
const Technologies = require('./technologies');
const Users = require('./users');
const WorkExamples = require('./work-examples');

router.get("technologies", Technologies.getAll);
router.get("technologies/id",  Technologies.getOne);
router.delete("technologies/:id", Technologies.deleteOne);
router.post("technologies", Technologies.create);
router.put("technologies/:id", Technologies.update);

router.get("users/:id", Users.getOne);

router.get("wrok-examples", WorkExamples.getAll);
router.post("wrok-examples", WorkExamples.create);
router.delete("wrok-examples/:id", WorkExamples.deleteOne);
router.put("wrok-examples/:id", WorkExamples.update);

module.exports = router
