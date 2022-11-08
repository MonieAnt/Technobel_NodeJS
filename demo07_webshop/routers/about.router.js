const aboutController = require('../controllers/about.controller');
const aboutRouter = require('express').Router();

// Router About
aboutRouter.get('/', aboutController.index);
aboutRouter.get('/contact', aboutController.contact);

module.exports = aboutRouter;