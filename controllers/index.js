const router = require('express').Router();

const customerRoutes = require('./customers');
const employeeRoutes = require('./employees');
const storageRoutes = require('./storage_units');
const homeRoutes = require('./home_routes');

router.use('/', homeRoutes);
router.use('/customer', customerRoutes);
router.use('/employee', employeeRoutes);
router.use('/storage', storageRoutes);

module.exports = router;