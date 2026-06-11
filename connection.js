const mongoose = require('mongoose');

async function connectmongoDB(url) {
    const conn  = await mongoose.connect(url);
    return conn;
}

module.exports = {connectmongoDB};