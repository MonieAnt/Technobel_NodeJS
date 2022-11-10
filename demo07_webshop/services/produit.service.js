const db = require('../config/db');

module.exports = 
{
    getAll,
    getById, 
    create,
    update
}

async function getAll(){
    return await db.Produit.findAll();
}
async function getById(id){
    const produit = await db.Produit.findByPk(id);
    if(!produit) throw "Produit non trouvé";
    return produit;
}
async function create(datas){}
async function update(id, datas){}