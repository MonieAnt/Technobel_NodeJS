const homeController = require('../controllers/home.controller')
const homeRouter = require('express').Router();


// Route Home + Formulaire :
homeRouter.get('/', homeController.index);
// Lien vers la page contact - Formulaire
homeRouter.get('/contact', homeController.contact);
// Lien vers la page contact - Formulaire complété.
homeRouter.post('/contact', homeController.contactPost);


module.exports = homeRouter;