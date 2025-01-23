// Create web server
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { check } = require('express-validator');

// Create comment
// api/comments
router.post('/',
    [
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is required').isEmail(),
        check('message', 'The message is required').not().isEmpty()
    ],
    commentController.createComment
);

router.get('/',
    commentController.getComments
);

router.delete('/:id',
    commentController.deleteComment
);

module.exports = router;