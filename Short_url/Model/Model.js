const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortid:{
        type: String,
        required: true,
        unique: true
    },
    redirectUrl:{
        type: String,
        required: true
    },
    clickCount:[{timestamp:{type: Number}}]
}, {typestamp: true})

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;