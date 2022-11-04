
const { Request, Response } = require('express');

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
     * Méthode Contact du home Controller
     * @param {Request} req     La requête
     * @param {Response} res    La réponse
    */
     contact : (req, res) => {
        //res.sendStatus(501)
        res.render('home/contact')
    },
}

module.exports = homeController