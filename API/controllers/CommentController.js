
class CommentController {

    static listCommentsByVideo(req, res) {
        res.send('Get all comments');
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