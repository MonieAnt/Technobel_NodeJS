// Chargement des variables d'env :
require('dotenv-flow').config();
const {PORT, NODE_ENV} = process.env;

// Les imports :
const express = require('express');
const router = require('./routers/index');

// Création du server :
const app = express();

// Config du server :
// - Fichiers statics
app.use(express.static('public'))
// - Gestion des formulaires (Content-Type : application/x-www-form-urlencoded) - BodyParser
app.use(express.urlencoded({extended: true}));

// Config Moteur de vue :
app.set('view engine', 'pug');          // Remplacer par PUG
app.set('views', 'views');

// Routing :
app.use(router);
// Va envoyer le routing vers index.js qui est le Routeur des Routeurs. Pour éviter d'écrire toutes les routes dans server.js

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server dispu sur le Port : ${PORT} en Mode : [${NODE_ENV}]`);
})