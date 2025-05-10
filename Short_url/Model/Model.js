const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortid: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {   
        type: String,
        required: true
    },
    clickCount: [{ timestamp: { type: Number } }] // Array to store timestamps of clicks
}, { timestamps: true });

const URL = mongoose.model('Url', urlSchema);
module.exports = URL;
