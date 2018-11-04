const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    details: {
        type: String,
        required: false
    },
    dateCreated: {
        type: Date
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    },
    goal: {
        type: Schema.Types.ObjectId,
        ref: 'Goal'
    }
});

const Task = mongoose.model('task', TaskSchema);
module.exports = Task;