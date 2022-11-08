const aboutController = {
    index : (req, res) => {
        res.render('home/about');
    },

    contact : (req, res) => {
        res.sendStatus(501);
    }
};

module.exports = aboutController;