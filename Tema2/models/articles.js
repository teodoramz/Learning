const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    Article_name: {
        type: String,
        required: true
    },
    Article_no: {
        type: Number,
        required: true
    },
    Article_short_description: {
        type: String
    },
    Article_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    Collection_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    Article_body: {
        type: String
    }, 
    Article_source: {
        type: String
    },
    Article_URL: {
        type: String
    },
    Location: {
        type: String
    },
    Article_keywords: {
        type: String
    },
    Article_weight: {
        type:Number
    },
    Article_citations: {
        type: String
    }
});

module.exports = mongoose.model('Articles', articleSchema);