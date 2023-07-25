const express = require('express');
const VideoController = require('../controllers/VideoController');
const CommentController = require('../controllers/CommentController');

const router = express.Router();

router.get('/', VideoController.listVideos);
router.get('/:videoId', VideoController.getVideo);
router.post('/', VideoController.createVideo);
router.put('/:videoId', VideoController.updateVideo);
router.delete('/:videoId', VideoController.deleteVideo);

router.get('/:videoId/products', VideoController.listProductsByVideo);
router.post('/:videoId/products/:productId', VideoController.addProduct);

router.get('/:videoId/comments', CommentController.listComments);
router.get('/:videoId/comments/:commentId', CommentController.getComment);
router.post('/:videoId/comments', CommentController.createComment);
router.put('/:videoId/comments/:commentId', CommentController.updateComment);
router.delete('/:videoId/comments/:commentId', CommentController.deleteComment);

module.exports = router;