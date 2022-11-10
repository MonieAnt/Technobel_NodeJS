const { DataTypes } = require('sequelize');

function model(sequelize) {
    const attributes = {
        IdProduct : { type : DataTypes.INTEGER},
        Nom : { type : DataTypes.STRING, allowNull: false},
        Description : { type : DataTypes.STRING, allowNull: false},
        Photo : { type : DataTypes.STRING, allowNull: false},
        EstDisponible : { type : DataTypes.BOOLEAN, allowNull: false},
        Prix : { type : DataTypes.FLOAT, allowNull: false}
    }
    return sequelize.define('Produit', attributes);
}

module.exports = model;