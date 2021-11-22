const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  }  = require('../../controllers/comment-controllers');

// adds a comment 
router.route('/:pizzaId').post(addComment);

// deletes a comment
router.route('/:pizzaId/:commentId').delete(removeComment);

router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;