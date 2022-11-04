// Chargement des variables d'env :
require('dotenv-flow').config();
const {PORT, NODE_ENV} = process.env;

// Les imports :
const express = require('express');
const chalk = require('chalk');
const router = require('./routers');

// Création du server :
const app = express();

// Config Moteur de vue :
app.set('view engine', 'ejs');
app.set('views', 'views');

// Routing :
app.use(router);
// Va envoyer le routing vers index.js qui est le Routeur des Routeurs. Pour éviter d'écrire toutes les routes dans server.js

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(chalk.magenta(`Server up on Port ${PORT} in mode [${NODE_ENV}]`));
})