const router = require('express').Router();
const customerRoutes = require('./customers');
const employeeRoutes = require('./employees')

router.use('/customer', customerRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;