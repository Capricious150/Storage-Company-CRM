const router = require('express').Router();
const employeeRoutes = require('./employee_routes')

router.use('/employee', employeeRoutes)

module.exports = router;