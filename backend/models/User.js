const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // goalTypes: [GoalTypeSchema],
    // goals: [GoalSchema]
});

module.exports = mongoose.model('User', UserSchema);