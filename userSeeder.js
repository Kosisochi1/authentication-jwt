const db = require('./db');
const UserModel = require('./model/users');
db.connect()
	.then(async () => {
		console.log('connected');
		await UserModel.insertMany([
			{
				Name: 'KOSI',
				Password: 'kosi',
				email: 'kosi5@gmail.com',
				Role: 'admin',
				Address: 'Kano',
				Phone_number: '3543563534',
				Gender: 'Female',
			},
		]);
		process.exit(1);
	})
	.catch((err) => {
		console.log(err);
	});
