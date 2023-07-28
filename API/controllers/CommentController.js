const Comment = require('../models/Comment');

class CommentController {

    static async listCommentsByVideo(req, res) {
        const videoId = req.params.videoId;
        
        const comments = await Comment.find({videoId: videoId});
        res.json(comments);
    }

    static getComment(req, res) {
        res.send('Get an existing comment');
    }

    static createComment(req, res) {
        res.send('Create a new comment');
    }

    static updateComment(req, res) {
        res.send('Update an existing comment');
    }

    static deleteComment(req, res) {
        res.send('Delete an existing comment');
    }
}

module.exports = CommentController;