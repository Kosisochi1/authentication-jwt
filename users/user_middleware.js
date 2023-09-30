const joi = require('joi');

const validateUser = async (req, res, next) => {
	try {
		const schema = joi.object({
			Name: joi.string().required(),
			Password: joi.string().required(),
			email: joi.string().required(),
			Role: joi.string().required(),
			Address: joi.string().required(),
			Phone_number: joi.string().required(),
			Gender: joi.string().required(),
		});
		await schema.validateAsync(req.body, { abortEarly: true });
		next();
	} catch (error) {
		return res.status(422).json({
			masssage: error.masssage,
			success: false,
		});
	}
};
const validateLogin = async (req, res, next) => {
	const LoginReq = req.body;
	try {
		const schema = joi.object({
			email: joi.string().required(),
			Password: joi.string().required(),
		});
		await schema.validateAsync(req.body, { abortEarly: true });
		next();
	} catch (error) {
		return res.status(422).json({
			masssage: error.masssage,
			success: false,
		});
	}
};
module.exports = {
	validateUser,
	validateLogin,
};
