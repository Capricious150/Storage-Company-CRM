const router = require('express').Router();
const path = require('path');
const { Employees } = require('../../models');

router.get('/', (req, res) => res.sendFile(path.resolve("public/html/login.html")));
router.get('/customers.html', (req, res) => res.sendFile(path.resolve("public/html/customers.html")));
router.get('/issues.html', (req, res) => res.sendFile(path.resolve("public/html/issues.html")));
router.get('/employee.html', (req, res) => res.sendFile(path.resolve("public/html/employee.html")));
// router.get('/units.html', (req, res) => res.sendFile(path.resolve("public/html/units.html")));

router.post('/login', async (req, res) => {

    try {
        const dbUserData = await Employees.findOne({
          where: {
            id: req.body.employee_id,
          },
        });
    
        if (!dbUserData) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
    
        const validPassword = await dbUserData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
          return;
        }
    
        req.session.save(() => {
          req.session.loggedIn = true;
    
          res
            .status(200)
            .json({ user: dbUserData, message: 'You are now logged in!' });
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

})


module.exports = router;