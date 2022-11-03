const express = require('express');

// Variable environnement
const PORT = 8080;

// Création Server
const app = express();


// Configuration du moteur de vue
// - Quel moteur utiliser (il doit être installé)
app.set('view engine', 'ejs');
// - Configuratiuon du répertoire où seront stockées les vues
app.set('views', 'views')


// Routing
app.get('/', (req, res) => {
    const now = new Date().toLocaleTimeString();
    const message = 'Hello World';

    res.render('home/index', {titre: 'Hello', subtitle: 'None', now, message})
});

app.get('/about', (req, res) => {
    const data = {
        lead : {firstname : 'Zaza', lastname : 'Vanderquack'},
        devs : [
            {firstname : 'Riri', lastname : 'Duck'},
            {firstname : 'Fifi', lastname : 'Duck'},
            {firstname : 'Loulou', lastname : 'Duck'},
            {firstname : 'Balthazar', lastname : 'Picsou'},
            {firstname : 'Archibald', lastname : 'Gripsou'},
            {firstname : 'Fladaga', lastname : 'Jones'}  
        ]
    }

    res.render('home/about', {lead : data.lead, devs : data.devs})
});


// Démarrer Server
app.listen(PORT, () => {
    console.log(`Server up on Port : ${PORT}`);
});