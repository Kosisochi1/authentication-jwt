const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connect = async (url) => {
	mongoose.connect(url || process.env.DB_URL);
	mongoose.connection.on('connected', () => {
		console.log('Successfully connected to Database');
	});
	mongoose.connection.on('error', (err) => {
		console.log('Fail connection');
	});
};

module.exports = {
	connect,
};
