const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboard = require('./dashboard');

// router.use('/dashbord',dashboard);

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;