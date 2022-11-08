// Chargement des variables d'env
require('dotenv-flow').config();
const { PORT, NODE_ENV, URL_MONGODB, SESSION_SECRET } = process.env;

// Les imports
const express = require('express');
const session = require('express-session');
require('express-async-errors');

const chalk = require('chalk');
const router = require('./routers/index');
const database = require('./database');

// Connexion à la base de donnée MongoDB
database(URL_MONGODB)
    .then((db) => {
        console.log('Connection MongoDB successfull !');
    })
    .catch((e) => {
        console.log('Connection MongoDB on error !');
        console.error(e.message);
        process.exit(1);
    })

// Création du server
const app = express();

// Configuration du server
// - Fichier static
app.use(express.static('public'))
// - Gestion des formulaires (Content-Type : application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));
// - Session
app.use(session({
    resave: true,
    saveUninitialized : true,
    secret: SESSION_SECRET,
    cookie : {
        httpOnly: true
    }
}))

// Config du moteur de vue
app.set('view engine', 'ejs');
app.set('views', 'views');

// Création d'un middelware pour exposer la connection de l'utilisateur
app.use((req, res, next) => {
    // Variable "local" qui est disponible dans le moteur de template
    res.locals.isConnected = (req.session.user !== undefined);
    res.locals.pseudo = req.session.user?.pseudo;

    next();
})


// Routing
app.use(router);

// Demarrage du server
app.listen(PORT, () => {
    console.log(chalk.magenta(`Server up on port ${PORT} in mode ${NODE_ENV}`));
})