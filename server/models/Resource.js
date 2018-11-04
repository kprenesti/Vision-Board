const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    url: {type: String},
    dateCreated: {
        type: Date,
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
});

const Resource = mongoose.model('resource', ResourceSchema);
module.exports = Resource;