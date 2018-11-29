const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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
	isDeleted: {type: Boolean, default: false},
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
UserSchema.methods.verifyPassword = (password)=>{
	return bcrypt.compareSync(password, this.password);
}
UserSchema.methods.hashPassword = (password) => {
	let salt = bcrypt.genSaltSync(10);
	let hash = bcrypt.hashSync(password, salt);
	return hash;
}


const User = mongoose.model('user', UserSchema);

module.exports = User;