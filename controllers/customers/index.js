const router = require('express').Router();
const customerRoutes = require('./customer_routes.js')

router.use('/customer', customerRoutes)

module.exports = router;