const mongoose = require('mongoose');

// Création d'un schema
//  - Définir les champs (Type, Contrainte, Validation, ...)
//  - Options
const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    country: {
        type: String,
        default: null
    },
    desc: {
        type: String,
        default: null
    },
    ingredients: {
        type: [{ type: String, minLength: 3 }],
        validate: {
            validator: (value) => value.length > 0,
            message: value => 'Minimum un ingrédient :o'
        }
    }
}, {
    collection: 'Recipe',
    timestamps: true
});


// Creation du model basé sur le schema "recipeSchema"
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;