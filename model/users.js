const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const UserSchema = new Schema({
	_id: {
		type: String,
		default: uuidv4(),
	},
	created_at: {
		type: Date,
		default: new Date(),
	},
	Name: {
		type: String,
		require: true,
	},
	Password: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	Role: {
		type: String,
		require: true,
		default: 'user',
	},
	Address: {
		type: String,
	},
	Phone_number: {
		type: String,
		require: true,
	},
	Gender: {
		type: String,
		require: true,
		enum: ['Male', 'Female'],
		default: 'Male',
	},
});
UserSchema.pre('save', async function (next) {
	const hash = await bcrypt.hash(this.Password, 10);
	this.Password = hash;

	next();
});
UserSchema.methods.isValidPass = async function (password) {
	const comparepass = await bcrypt.compare(password, this.Password);
	return comparepass;
};
const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
