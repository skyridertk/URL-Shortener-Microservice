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
        default: 0
    },
    createdOn:{
        type: Date,
        default: new Date().toLocaleString()
    }
});

const Url = mongoose.model('Url', UrlSchema);

module.exports = Url;