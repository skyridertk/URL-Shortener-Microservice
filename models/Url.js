'use-strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    url:{
        type: String,
        required: true
    },
    sId:{
        type: Number,
        unique: true,
        default: 0
    }
});

const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;