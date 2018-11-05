const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "A name must be provided."]
    },
    username: {
        type: String,
        required: [true, "You must include a username."],
        unique: [true, "The username is already in use.  Please use a different username."]
    },
    password: {
        type: String,
        required: [true, "You must include a password."]
    },
    dateCreated: Date,
    dateUpdated: {
        type: Date,
        required: [true, "Please include the dateUpdated."]    },
    goals: [{type: Schema.Types.ObjectId, ref: 'Goal'}]
});

const User = mongoose.model('user', UserSchema);
module.exports = User;