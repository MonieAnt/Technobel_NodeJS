const chalk = require('chalk');
const { Request, Response } = require('express');

// FakeDB
const data = [];

const homeController = {
    /**
     * Méthode index du home controller
     * @param {Request} req La requete
     * @param {Response} res La reponse
     */
    index: (req, res) => {
        // Lecture de la session
        console.log('UserId (Session) : ', req.session.userId);
        console.log(res.locals.isConnected);

        res.render('home/index');
    },

    /**
     * Méthode contact du home controller
     * @param {Request} req La requete
     * @param {Response} res La reponse
     */
    contact: (req, res) => {
        // Afficher la page du formulaire (GET)
        res.render('home/contact');
    },

    /**
     * Méthode POST contact du home controller
     * @param {Request} req La requete
     * @param {Response} res La reponse
     */
    contactPost: (req, res) => {
        // Traiter les données du formulaire (POST)
        //console.log(req.body);
        
        // Affichage des infos dans la console
        const { message, email, pseudo } = req.body;
        console.log(chalk.cyan(`Nouveau message de ${email} (${pseudo})`));
        console.log(chalk.black(`Message : `) + chalk.gray(message));

        // Sauvegarde du message dans la FakeDB
        data.push(message);

        // Affichage de la page de réponse
        res.render('home/response', {
            // name: pseudo !== '' ? pseudo : email
            name: pseudo || email
        });
    }
}

module.exports = homeController;