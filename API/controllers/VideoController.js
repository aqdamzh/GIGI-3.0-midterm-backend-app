
class VideoController {

    static listVideos(req, res) {
        res.send('Get all videos');
    }

    static getVideo(req, res) {
        res.send('Gen an existing video');
    }

    static createVideo(req, res) {
        res.send('Create a new video');
    }

    static updateVideo(req, res) {
        res.send('Update an existing video');
    }

    static deleteVideo(req ,res) {
        res.send('Delete an existing video');
    }

    static addProduct(req ,res) {
        res.send('Add product to the video');
    }

    static listProductsByVideo(req, res) {
        res.send('Get all products by video');
    }
}

module.exports = VideoController;