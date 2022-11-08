const articlesController = require('../controllers/articles.controller');
const articlesRouter = require('express').Router();

// Router Articles :
articlesRouter.get('/', articlesController.index);

module.exports = articlesRouter;