const homeController = require('../controllers/home.controller')
const homeRouter = require('express').Router();

const recipeController = require('../controllers/recipe.controller')

// Route Home + Formulaire :
homeRouter.get('/', homeController.index);
// Lien vers la page contact - Formulaire
homeRouter.get('/contact', homeController.contact);
// Lien vers la page contact - Formulaire complété.
homeRouter.post('/contact', homeController.contactPost);


// Route Recettes :
// Lien vers la page Index - Recette
homeRouter.get('/recipe', recipeController.index);
// Lien vers la page Contact - Recette
homeRouter.get('/recipeForm', recipeController.form);
// Lien vers la page Contact - Recette complété
homeRouter.post('/recipeForm', recipeController.formPost);

module.exports = homeRouter;