const chalk = require('chalk');


// Fake DB Recettes :
const dataRecipe = [
    {
        id: 1,
        recipeName : "Pâtes Bolognaises",
        origin: "Italie",
        details: "Meilleures avec des spaghetti."
    },
    {
        id: 2,
        recipeName : "Sushi",
        origin: "Japon",
        details: "A manger avec des baguettes !"
    },
];

const recipeController = {
    index : (req, res) => {

        res.render('home/recipeIndex', {dataRecipe})
    },

    form : (req, res) => {
        res.render('home/recipeForm')
    },

    formPost : (req, res) => {

        const { recipeName, origin, details } = req.body;

        // Sauvegarde dans la Fake DB
        dataRecipe.push( recipeName, origin, details );


        res.render('home/recipeFormResponse', {
            name : recipeName,
        });
    }
}

module.exports = recipeController