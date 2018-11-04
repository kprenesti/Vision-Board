const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateCreated: Date,
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
    accomplished: Boolean,
    tasks: [{
        type: Schema.Types.ObjectId, 
        ref: 'Task'
        }],
    coverPhoto: String
});

const Goal = mongoose.model('goal', GoalSchema);
module.exports = Goal;