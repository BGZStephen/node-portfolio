const router = require('express').Router();
const Users = require('./users');
const Images = require('./images');
const multer = require('multer');
const authorizeRoute = require('api/services/auth.js').authorizeRoute;

router.all('*', authorizeRoute);
router.all('/users', require('./users'));
router.all('/work-examples', require('./work-examples'));

router.post(
	'/images/upload',
	multer({ dest: 'uploads/' }).single('image'),
	Images.uploadOne,
);
router.get('/images', Images.getAll);

module.exports = router;
