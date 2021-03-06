const router = require('express').Router();
const { Customers, Employees } = require('../../models');
const path = require('path');


// 4 Redirects in case our customers do some squirrely things with the navbar or URL
router.get('/customers.html', (req, res) => {

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    res.redirect("../customers.html")});


router.get('/issues.html', (req, res) => {

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    res.redirect("../issues.html")
});
router.get('/employee.html', (req, res) => {
    
    if (req.session.loggedIn !== true){
        res.redirect('/');
      }
    
    res.redirect("../employee.html")
});

router.get('/storage', (req, res) => { 

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    res.redirect("../storage")
});

// GET ALL CUSTOMERS, serves customers.handlebars
router.get('/', async (req, res) => {

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    try {
        const customerData = await Customers.findAll({
            include: [
                {model: Employees}
            ]
        })

        let insured = 0;
        let uninsured = 0;

        // console.log(customerData);
        const renderedCustomers = customerData.map((customers) => {
            if(customers.insured){
                insured++
            } else{
                uninsured++
            }

            return customers.get({plain: true})
        })
        console.log(renderedCustomers);
        res.status(200).render('customer', {
            renderedCustomers,
            insured,
            uninsured
        });


        // res.status(200).json(customerData);
        console.log('GET request to CUSTOMER successful');
    } catch (err) {
        res.status(400).json(err)
        console.log('GET request to CUSTOMER failed');
    }
})

// GET BY ID - Performs both a GET ALL and a GET BY ID under the hood, and serves both to
// customersbyid.handlebars
router.get('/:id', async (req, res) => {

    if (req.session.loggedIn !== true){
        res.redirect('/');
      }

    try {
        const customerData = await Customers.findAll({
            include: [
                {model: Employees}
            ]
        })
        // console.log(customerData);
        const renderedCustomers = customerData.map((customers) => {
            return customers.get({plain: true})
        })

        const soleCustomerData = await Customers.findByPk(req.params.id,{
            include: [
                {model: Employees}
            ]
        })
        if (!soleCustomerData){
            res.status(500).json({message: "No customer with that ID found"})
            return
        }
        const renderedCustomer = soleCustomerData.get({plain: true})
        res.status(200).render('customerbyid', {
            renderedCustomers,
            renderedCustomer
        })
    } catch (err){
        res.status(400).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const newCustomer = await Customers.create(req.body)
        res.status(200).json(newCustomer)
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn === true){
      req.session.destroy(() => {
        res.status(204).redirect('/')
      })
    }
  });

router.put('/:id', async (req, res) => {
    try {
        const updatedCustomer = await Customers.update(req.body,
            {
                where:
                {
                    id: req.params.id
                }
            })
        if (!updatedCustomer){
            res.status(500).json({message: "No customer with that ID exists!"})
        }
        res.status(200).json(updatedCustomer)
    } catch (err) {
        res.status(400).json(err)
    }
});



module.exports = router;