const Product = require('../models/Product');

class ProductController {

    static async listProductsByVideo(req, res) {
        try {
            const videoId = req.params.videoId;
            const products = await Product.find({videoId: videoId});
            res.json(products);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    static getProduct(req, res) {
        res.send('Get and existing product');
    }

    static addProduct(req ,res) {
        res.send('Add product to the video');
    }

    static updateProduct(req, res) {
        res.send('Update an existing product');
    }

    static deleteProduct(req, res) {
        res.send('Delete an existing product');
    }
}

module.exports = ProductController;