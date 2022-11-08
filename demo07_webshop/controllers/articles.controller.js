const articlesController = {
    index : (req, res) => {
        res.render('home/articles');
    }
};

module.exports = articlesController;