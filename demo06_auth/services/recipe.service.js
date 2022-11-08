const Recipe = require("../models/repice");

const recipeService = {

    getAll: async () => {

        return await Recipe.find({}, ["_id", "name"]);
    },

    getById: async (id) => {

        return await Recipe.findById(id);
    },

    add : async ({ name, desc, country, ingredients }) => {

        // const r = new Recipe({name, desc, country, ingredients});
        // await r.save();

        return await Recipe.create({name, desc, country, ingredients});
    }
};

module.exports = recipeService;