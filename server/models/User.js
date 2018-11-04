const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    dateCreated: Date,
    dateUpdated: {
        type: Date,
        default: Date.now
    },
    goals: [{type: Schema.Types.ObjectId, ref: 'Goal'}]
});

const User = mongoose.model('user', UserSchema);
module.exports = User;