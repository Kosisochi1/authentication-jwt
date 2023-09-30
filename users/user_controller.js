const UserModel = require('../model/users');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createUser = async (req, res) => {
	try {
		const userReq = req.body;
		const existingUser = await UserModel.findOne({
			email: userReq.email,
		});
		if (existingUser) {
			return res.status(409).json({
				massage: 'User already created',
			});
		}
		const user = await UserModel.create({
			Name: userReq.Name,
			Password: userReq.Password,
			email: userReq.email,
			Role: userReq.Role,
			Address: userReq.Address,
			Phone_number: userReq.Phone_number,
			Gender: userReq.Gender,
		});
		const token = await jwt.sign(
			{ email: user.email, _id: user._id },
			process.env.SECRETE_KEY
		);
		return res.status(201).json({
			massage: 'User created successful',
			token,
			user,
		});
	} catch (error) {
		return res.status(500).json({
			massage: 'Server error',
			data: null,
		});
	}
};

const LoginUser = async (req, res) => {
	const loginReq = req.body;
	const loginUser = await UserModel.findOne({ email: loginReq.email });
	if (!loginUser) {
		return res.status(404).json({
			massage: 'User not found',
		});
	}
	const valididatePassword = await loginUser.isValidPass(loginReq.Password);
	if (!valididatePassword) {
		return res.status(422).json({
			massage: 'Incorrect Password or Email',
		});
	}
	const token = await jwt.sign(
		{ email: loginUser.email, _id: loginUser._id },
		process.env.SECRETE_KEY,
		{ expiresIn: '1h' }
	);
	return res.status(200).json({
		massage: 'Login successful',
		loginUser,
		token,
	});
};

module.exports = {
	createUser,
	LoginUser,
};
