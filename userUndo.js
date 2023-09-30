const db = require('./db');
const UserModel = require('./model/users');
db.connect()
	.then(async () => {
		// this undo the seeder
		await UserModel.deleteMany({
			Name: 'KOSI',
			Password: 'kosi',
			email: 'kosi5@gmail.com',
			Role: 'admin',
			Address: 'Kano',
			Phone_number: '3543563534',
			Gender: 'Female',
		});
	})
	.catch((err) => {
		console.log(err);
	});
