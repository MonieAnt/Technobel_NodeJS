
// Chargement des fichiers d'env .env.dev / .env.pro
require('dotenv-flow').config();

// Import d'Express
const express = require("express");

// Récupération des variables d'environnement
const { NODE_ENV, PORT } = process.env
// ↓ Alternative
// const NODE_ENV = process.env.NODE_ENV
// const PORT = process.env.PORT

// Création du server
const app = express();

// Ajout d'une route GET sur l'url '/'
app.get('/', (req, res) => {
    // Réponse envoyée
    res.send('<h1>Hello World</h1>')
});

// Ajout route Contact
app.get('/contact', (req, res) => {
    res.send('<h1>Ma page Contact</h1>')
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Vous êtes perdu 😔 </h1>')
});

// Démarrage du server
// Port en fonction de l'environnement Dev ou Prod via .env.dev ou .env.prod
app.listen(process.env.PORT, ()=>{
    // Callback pour montrer que Server fonctionne
    console.log(`Server up on port ${PORT} [${NODE_ENV}]`);
});