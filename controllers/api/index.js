const router = require('express').Router();

const userRoutes = require('./users');
const postRoutes = require('./post');
const commentRoutes = require('./postComment');

router.use('/users', userRoutes);
router.use('/post',postRoutes);
router.use('/comment',commentRoutes);

module.exports = router;