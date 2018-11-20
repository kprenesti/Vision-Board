const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String
	},

	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	dateCreated: Date,
	dateUpdated: {
		type: Date,
		default: Date.now
	},
	goals: [
		{
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
				name: {type: String, required: true},
				description: String,
				completed: Boolean
			}],
			resources: [
				{
					name: String,
					url: String,
					description: String
				}
			],
			coverPhoto: String
		}
	]
});

const User = mongoose.model('user', UserSchema);
module.exports = User;