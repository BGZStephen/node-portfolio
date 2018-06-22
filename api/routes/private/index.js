const router = require('express').Router();
const Users = require('./users');
const Images = require('./images');
const multer = require('multer');
const authorizeRoute = require('api/services/auth.js').authorizeRoute;

router.all('*', authorizeRoute);
router.all('/users', require('./users'));
router.all('/work-examples', require('./work-examples'));
router.all('/images', require('./images'));

module.exports = router;
