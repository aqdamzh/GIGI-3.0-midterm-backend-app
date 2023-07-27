const Video = require('../models/Video');

class VideoController {

    static async listVideos(req, res) {
        try {
            const videos = await Video.find();
            res.json(videos);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
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

}

module.exports = VideoController;