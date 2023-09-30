const express = require('express');
const controller = require('./item_controller');
const middleware = require('./item_middleware');
const globalMiddleware = require('../globalMware/globalMiddleWare');
const router = express.Router();

router.post(
	'/createItem',
	globalMiddleware.authenticateToken,
	middleware.validateItem,
	controller.CreateItem
);
router.get(
	'/getAll',
	globalMiddleware.authenticateToken,
	controller.GetAllItems
);
router.get('/:id', globalMiddleware.authenticateToken, controller.GetOneItem);
router.put(
	'/:id',
	globalMiddleware.authenticateToken,
	middleware.validateItem,
	controller.UpdateItem
);
router.delete(
	'/:id',
	globalMiddleware.authenticateToken,
	controller.deleteItem
);

module.exports = router;
