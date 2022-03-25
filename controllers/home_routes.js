const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => res.sendFile(path.resolve("public/html/login.html")));
router.get('/customers.html', (req, res) => res.sendFile(path.resolve("public/html/customers.html")));
router.get('/issues.html', (req, res) => res.sendFile(path.resolve("public/html/issues.html")));
router.get('/employee.html', (req, res) => res.sendFile(path.resolve("public/html/employee.html")));
// router.get('/units.html', (req, res) => res.sendFile(path.resolve("public/html/units.html")));


module.exports = router;