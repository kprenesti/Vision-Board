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
	isDeleted: {
		type: Boolean,
		default: false
	},
	goals: [{
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
			name: {
				type: String,
				required: true
			},
			description: String,
			completed: Boolean
		}],
		resources: [{
			name: String,
			url: String,
			description: String
		}],
		coverPhoto: String
	}]
});

// UserSchema.pre('save', function(next){
// 	let user = this;

// 	if(!user.isModified('password')) return next();
// 	bcrypt.genSalt(10, function(err, salt){
// 		if(err) return next(err);
// 		bcrypt.hash(user.password, salt, function(err, hash){
// 			if(err) return next(err);
// 			user.password = hash;
// 			next();
// 		})
// 	})
// });

// UserSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) return cb(err);
//         cb(null, isMatch);
//     });
// };


const User = mongoose.model('user', UserSchema);

module.exports = User;