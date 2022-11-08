const recipeService = require("../services/recipe.service");


const recipeController = {

    index: async (req, res) => {
        const recipes = await recipeService.getAll();

        res.render('recipe/index', { recipes, count: recipes.length });
    },

    detail: async (req, res) => {
        const { id } = req.params;
        const recipe = await recipeService.getById(id);

        if(!recipe) {
            return res.sendStatus(404);
        }
        res.render('recipe/detail', { recipe });
    },

    form: (req, res) => {
        res.render('recipe/add', {error: undefined});
    },


    formPost: async (req, res) => {
        const data = req.body;
        console.log('data body : ', data);

        if(!data.name) {
            return res.render('recipe/add', {
                error: 'Le nom est obligatoire'
            });
        }
        
        const result = await recipeService.add(data);
        console.log('data DB : ', result);

        res.redirect('/recipe');
    }

};

module.exports = recipeController;