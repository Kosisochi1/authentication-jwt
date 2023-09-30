const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema;
const ItemSchema = new Schema({
	_id: {
		type: String,
		default: uuidv4,
	},
	Name: {
		type: String,
		require: true,
	},
	Price: {
		type: String,
		require: true,
	},
	Size: {
		type: String,
		require: true,
	},
	Description: {
		type: String,
		require: true,
	},
	created_at: {
		type: Date,
		default: new Date(),
	},
});
const ItemsModel = mongoose.model('items', ItemSchema);
module.exports = ItemsModel;
