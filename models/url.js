const mongoose = require('mongoose');
const user = require('./user');

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: {
        type: [{timestamp : {type: Number}}]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
}, {timestamps: true});

const URL = mongoose.model('url', urlSchema);

module.exports = URL;