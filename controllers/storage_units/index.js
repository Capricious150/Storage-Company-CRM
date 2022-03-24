const router = require('express').Router();
const storageRoutes = require('./storage_unit_routes.js');

router.use('/', storageRoutes);

module.exports = router;