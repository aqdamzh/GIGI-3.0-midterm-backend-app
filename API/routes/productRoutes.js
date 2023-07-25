const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get('/', ProductController.listProducts);
router.get('/:productId', ProductController.getProduct);
router.post('/', ProductController.createProduct);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProduct);

module.exports = router;