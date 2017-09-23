const router = require('express').Router();
const Users = require('./users');
const WorkExamples = require('./work-examples');
const Images = require('./images');
const multer = require('multer');

router.get('users/:id', Users.getOne);

router.get('/work-examples', WorkExamples.getAll);
router.post('/work-examples', WorkExamples.create);
router.delete('/work-examples/:id', WorkExamples.deleteOne);
router.put('/work-examples/:id', WorkExamples.updateOne);

router.post('/images/upload', multer({dest: 'uploads/'}).single('image'), Images.uploadOne);

module.exports = router;
