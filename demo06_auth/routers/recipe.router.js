const recipeController = require('../controllers/recipe.controller');

const recipeRouter = require('express').Router();

recipeRouter.get('/', recipeController.index);
recipeRouter.get('/detail/:id', recipeController.detail);
recipeRouter.get('/add', recipeController.form);
recipeRouter.post('/add', recipeController.formPost);

module.exports = recipeRouter;