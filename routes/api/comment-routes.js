const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controllers');

// adds a comment 
router.route('/:pizzaId').post(addComment);

// deletes a comment
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;