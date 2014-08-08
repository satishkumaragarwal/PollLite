// app/models/user.js

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

	google : {
		id 		: String,
		token	: String,
		email	: String,
		name	: String  
	}
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null);
};

//checking if password is valid
userSchema.methods.validPassword = function(password){
	return bcrypt.comapreSync(password, this.local.password);
};

//Create a model for users and expose it 
module.exports = mongoose.model('User', userSchema);