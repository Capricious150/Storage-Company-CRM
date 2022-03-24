const router = require('express').Router();
const employeeRoutes = require('./employee_routes.js')

router.use('/', employeeRoutes)

module.exports = router;