// Nécessaire pour résoudre les actions
// Le CallBack a exécuter

const homeController = {

    index: (req, res) => {
        res.send('<h1>Home</h1>')
    },

    contact: (req, res) => {
        res.send('<h1>Contact</h1>')
        // res.sendStatus(501);
        // Status 501 : Not Implemented
        // Status 404 : 
        // Status 400 :
    },

    number: (req, res) => {
        const nb = parseInt(req.params.nb);
        // parseInt(req.params.nb) = +req.params.nb
        res.send(`<h1>Number ${nb}</h1>`)
    }

};

module.exports = homeController