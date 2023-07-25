
class ProductController {

    static listProducts(req, res) {
        res.send('Get all products');
    }

    static getProduct(req, res) {
        res.send('Get and existing product');
    }

    static createProduct(req, res) {
        res.send('Create a new product');
    }

    static updateProduct(req, res) {
        res.send('Update an existing product');
    }

    static deleteProduct(req, res) {
        res.send('Delete an existing product');
    }
}

module.exports = ProductController;