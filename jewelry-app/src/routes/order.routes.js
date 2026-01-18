const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/place', authMiddleware, orderController.placeOrder);
router.get('/', authMiddleware, orderController.getOrders);

module.exports = router;
