const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    end_year:{
        type:Number,
        default:0
    },
    intensity:{
        type: String,
        default: "0"
    },
    sector:{
        type: String,
        default: ''
    },
    topic:{
        type: String,
        default: ''
    },
    insights:{
        type: String,
        default: ''
    },
    url:{
        type: String,
        default:''
    },
    region:{
        type: String,
        default: ''
    },
    start_year:{
        type: String,
        default: '2020'
    },
    impact:{
        type: String,
        default: ''
    },
    added_on:{
        type: String,
        default:""
    },
    published_on:{
        type: String,
        default:""
    },
    country:{
        type: String,
        default: ''
    },
    relevance:{
        type: String,
        default: "1"
    },
    pestle:{
        type: String,
        default: ''
    },
    source:{
        type: String,
        default: ''
    },
    title:{
        type: String,
        default: ''
    },
    likelihood:{
        type: String,
        default: "0"
    },
});

module.exports = mongoose.model('Data', Schema);