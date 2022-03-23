const router = require('express').Router();
const employeeRoutes = require('./employee_routes.js')

router.use('/employee', employeeRoutes)

module.exports = router;