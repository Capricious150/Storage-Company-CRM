const router = require('express').Router();
const path = require('path');
const { Employees } = require('../models');

router.get('/', (req, res) => res.sendFile(path.resolve("public/html/login.html")));

router.get('/customers.html', (req, res) => {
  console.log(req.session);
  if (req.session.loggedIn === true){
  res.sendFile(path.resolve("public/html/customers.html"))
  } else {
    res.redirect('/');
  }
});

router.get('/issues.html', (req, res) => {
  if (req.session.loggedIn !== true){
    res.redirect('/');
  }
  res.sendFile(path.resolve("public/html/issues.html"))
});

router.get('/employee.html', (req, res) => {
  if (req.session.loggedIn !== true){
    res.redirect('/');
  }
  res.sendFile(path.resolve("public/html/employee.html"))
});

// Login Post, recycled from class activies and partially refactored for our application
router.post('/login', async (req, res) => {
    console.info("POST to /login RECEIVED");
    console.info(req.body.password);
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
            console.info("Something went wrong finding the user")
          return;
        }
        console.log(dbUserData);
        const validPassword = await dbUserData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
            console.info("Something went wrong with the password")
          return;
        }
    
        req.session.save(() => {
          req.session.loggedIn = true;
          console.log(req.session)
          res
            .status(200)
            .json({ user: dbUserData, message: 'You are now logged in!' });
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

})

// Logout post. Destroys session.
router.post('/logout', (req, res) => {
  if (req.session.loggedIn === true){
    req.session.destroy(() => {
      res.status(200)
    })
  }
});

module.exports = router;