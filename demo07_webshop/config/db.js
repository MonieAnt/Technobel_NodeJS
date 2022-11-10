const { Sequelize } = require('sequelize');

const { dbName, dbConfig } = require("config.json");

module.exports=db={};

initialize();

async function initialize() {
    const dialect = 'mysql';
    const host = dbConfig.server
    const { userName, password } = dbConfig.authentifcation.options;

    // Connect Me :
    const sequelize = new Sequelize(dbName, userName, password, {host, dialect});

    // Initialization des models :
    db.Produit = require('../models/mysql/produits.models')(sequelize);

    // await sequelize.sync({ alter:true });
}