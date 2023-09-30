const db = require('./db');
const ItemModel = require('./model/items');
db.connect()
	.then(async () => {
		await ItemModel.insertMany([
			{
				Name: 'Carbonated',
				Price: '50',
				Size: 'small',
				Description: 'mongo',
			},
		]);
		process.exit(1);
	})
	.catch((err) => {
		console.log(err);
	});
