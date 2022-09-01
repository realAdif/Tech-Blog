const router = require('express').Router();

const userRoutes = require('./login');


router.use('/login', userRoutes);


module.exports = router;