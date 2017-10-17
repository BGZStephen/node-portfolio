const router = require('express').Router();
const Users = require('./users');
const WorkExamples = require('./work-examples');
const authorizeRoute = require('../../services/auth.js').authorizeRoute;

router.all('*', authorizeRoute);
router.post('/users/authenticate', Users.authenticate);

router.get('/work-examples', WorkExamples.getAll);
router.all('/work-examples/:id*', WorkExamples.fetchWorkExample);
router.get('/work-examples/:id', WorkExamples.get);

module.exports = router;
