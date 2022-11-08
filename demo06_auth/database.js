const mongoose = require('mongoose');

module.exports = async (urlConnection) => {

    await mongoose.connect(urlConnection, {
    });

    return mongoose.connection;
}