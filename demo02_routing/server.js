// Chargement variables environnement :
require('dotenv-flow').config();
const { NODE_ENV, PORT } = process.env;

// Appel d'Express
const express = require('express');
const homeRouter = require('./routers/home.router');

// Création du Server :
const app = express();

// Ou Apple d'Express et lancement du serveur en même temps : 
// const app = require('express')();



// Système de ROUTAGE :

// Ajout des routes
// On dit au serveur quelle route il doit utiliser. 
// Ici homeRouter :
app.use('/', homeRouter);


// Démarrer le Serveur
app.listen(PORT, ()=> {
    console.log(`Server up on : ${PORT} in [${NODE_ENV}] Mode`);
});