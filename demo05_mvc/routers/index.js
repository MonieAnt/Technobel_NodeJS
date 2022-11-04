const homeRouter = require('./home.router');

const router = require('express').Router();

router.use('/', homeRouter);

module.exports = router;