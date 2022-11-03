const homeController = {

    index : (req, res) => {
        res.send('<h1>Page d\'accueil</h1>')
    },

    contact : (req, res) => {
        res.send('<h1>Contact</h1>')
    },

    boum : (req, res) => {
        res.send('<h1>Boum</h1>')
    },

};

module.exports = homeController