
class ProductController {

    static listProductsByVideo(req, res) {
        res.send('Get all products by video');
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