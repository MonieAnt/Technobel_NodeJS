const chalk = require('chalk');
const { Request, Response } = require('express');

// Fake DB
const data = [];

const homeController = {
    /**
     * Documentation JavaScript et Typage.
     * Méthode Index du home Controller
     * @param {Request} req     La requête
     * @param {Response} res    La réponse
    */
    index : (req, res) => {
        res.render('home/index')
    },

    /**
     * Documentation JavaScript et Typage.
     * Méthode Index du home Controller
     * @param {Request} req     La requête
     * @param {Response} res    La réponse
    */
     contact : (req, res) => {
        //res.sendStatus(501)
        // Affichage de la page du formulaire (GET)
        res.render('home/contact')
    },

    /**
     * Documentation JavaScript et Typage.
     * Méthode POST du home Controller
     * @param {Request} req     La requête
     * @param {Response} res    La réponse
    */
    contactPost: (req, res) => {
        // Traiter les données du formulaire (POST)
        // console.log(req.body);

        // Affichage des infos dans la console :
        const { email, pseudo, message } = req.body;
        console.log(chalk.cyan(`Nouveau message de ${email} (${pseudo})`));
        console.log(chalk.black(`Message : `) + chalk.gray(`${message}.`));

        // Sauvegarde du message dans la fake DB
        data.push(message);

        // Affichage de la page de réponse
        res.render('home/response', {
            // name : !!pseudo ? pseudo : email
            name : pseudo || email
        });

    }
}

module.exports = homeController