const ItemsModel = require('../model/items');

const CreateItem = async (req, res) => {
	const itemReq = req.body;
	const item = await ItemsModel.create(itemReq);
	return res.status(201).json({
		massage: 'Item created successfully',
		item: item,
	});
};
const GetAllItems = async (req, res) => {
	const items = await ItemsModel.find();
	return res.status(200).json({
		massage: 'All items in the Database',
		items,
	});
};
const GetOneItem = async (req, res) => {
	const reqId = req.params.id;
	const item = await ItemsModel.findById(reqId);
	if (!item) {
		return res.status(404).json({
			massage: 'Item not found',
		});
	}
	return res.status(200).json({
		massage: 'Single item in the Database',
		item,
	});
};
const UpdateItem = async (req, res) => {
	const reqId = req.params.id;
	const reqBody = req.body;
	const itemExist = await ItemsModel.findOne({ _id: reqId });
	if (!itemExist) {
		return res.status(404).json({
			massage: 'No record found ',
		});
	}
	const updateItem = await ItemsModel.updateMany(reqBody);
	return res.status(200).json({
		massage: 'Update was successfull',
		data: updateItem,
	});
};
const deleteItem = async (req, res) => {
	const reqId = req.params.id;
	const itemExist = await ItemsModel.findOne({ _id: reqId });
	if (!itemExist) {
		return res.status(404).json({
			massage: 'No record found ',
		});
	}
	const deleteitem = await ItemsModel.deleteOne(itemExist);
	return res.status(200).json({
		massage: 'Item Deleted',
	});
};

module.exports = {
	CreateItem,
	GetAllItems,
	GetOneItem,
	UpdateItem,
	deleteItem,
};
