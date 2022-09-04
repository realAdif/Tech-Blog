const router = require('express').Router();

const userRoutes = require('./users');
const dashboardRoutes = require('./post');

router.use('/users', userRoutes);
router.use('/dashboard',dashboardRoutes);


module.exports = router;