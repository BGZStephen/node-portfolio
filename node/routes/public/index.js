const router = require('express').Router();
const Users = require('./users');
const WorkExamples = require('./work-examples');
const multer = require('multer');

router.post('/users/authenticate', Users.authenticate);
router.post('/users', Users.create);

router.get('/work-examples', WorkExamples.getAll);
router.get('/work-examples/:id', WorkExamples.getOne);
router.post('/work-examples/imageUpload', multer({dest: 'uploads/'}).single('image'), WorkExamples.uploadImage);

module.exports = router;
