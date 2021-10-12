const router = require('express').Router();
const apiRoute = require('./api');
const htmlRoute = require('htmlRoute.js');

router.use('/', htmlRoute);
router.use('/api', apiRoute);

module.exports = router;