require('dotenv-flow').config();
const { NODE_ENV, PORT} = process.env;

const express = require('express');
const homeRouter = require('./routers/home.router');
const productRouter = require('./routers/product.router');

const app = express();

// Ajout Middleware Application-Level
app.use((req, res, next) => {
    
    const now = new Date();
    const url = req.url;

    console.log(`${now.toLocaleString()} : ${url}`);

    next();
});

// Routing
app.use(homeRouter);
app.use(productRouter);


// Ajout Middleware de Gestion d'Erreurs
app.use((err, req, res, next)=> {

    // Possibilité de stocker dans une DB ou fichier le type d'erreur que j'ai eu.
    // code à insérer ...

    // Si le header a été envoyé, on laisse Express le gérer.
    if(res.headerSent) {
        return next(err);
    }

    // Erreur en mode Développement
    if(NODE_ENV === "development"){
        let content = "<h1>Error !</h1>"
        content += JSON.stringify(err);
        return res.send(content)
    }

    // Erreur générique
    return res.sendStatus(500).send("<h1>Une erreur s\'est produite !</h1>")
});


app.listen(PORT, () => {
    console.log(`Server up on Port : ${PORT} in [${NODE_ENV} Mode]`);
});