const express = require('express');
const db = require('./db');
const router = require('./users/user_router');
const item_router = require('./Items/item_route');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/users', router);
app.use('/items', item_router);

db.connect();
app.listen(PORT, () => {
	console.log('server started');
});
