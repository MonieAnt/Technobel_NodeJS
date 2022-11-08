const homeController = require('../controllers/home.controller');

const homeRouter = require('express').Router();

homeRouter.get('/', homeController.index);
homeRouter.get('/contact', homeController.contact);
homeRouter.post('/contact', homeController.contactPost);

module.exports = homeRouter;