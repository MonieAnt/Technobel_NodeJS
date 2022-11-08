const homeRouter = require('./home.router');
const aboutRouter = require('./about.router');
const articlesRouter = require('./articles.router');

const router = require('express').Router();

router.use('/', homeRouter);
router.use('/about', aboutRouter);
router.use('/articles', articlesRouter);

module.exports = router;