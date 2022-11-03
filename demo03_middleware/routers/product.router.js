const productController = require('../controllers/product.controller');

const productRouter = require('express').Router();

// Ajout Middleware Application-Level
productRouter.use((req, res, next) => {

    console.log(`Utilisation du Routeur Product`);

    next();
});

productRouter.get('/product', productController.index);
productRouter.get('/product/:id', productController.detail);

module.exports = productRouter;