const config = require('../../config');
const router = require('express').Router();
const Users = require('./users');
const WorkExamples = require('./work-examples');

router.get("users/:id", Users.getOne);

router.get("/work-examples", WorkExamples.getAll);
router.post("/work-examples", WorkExamples.create);
router.delete("/work-examples/:id", WorkExamples.deleteOne);
router.put("/work-examples/:id", WorkExamples.updateOne);

module.exports = router
