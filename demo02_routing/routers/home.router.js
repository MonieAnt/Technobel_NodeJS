// Création du routeur avec Express

// Besoin d'Express
const express = require('express');
const homeController = require('../controllers/home.controller');

// Création du routeur homeRouter :
const homeRouter = express.Router();

// Ajout des Routes pour lier avec Controlleur
homeRouter.get('/', homeController.index);
homeRouter.get('/contact', homeController.contact);
homeRouter.get('/number/:nb([0-9]+)', homeController.number);
// /number/: Segment dynamique
// [0-9]+ : '+' = au moins une fois
// [] : Regex de 0 à 9
// -?[0-9] : Autoriser les chiffres négatifs.

// Export du Routeur
module.exports = homeRouter;