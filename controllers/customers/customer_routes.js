const router = require('express').Router();
const { Customers, Employees } = require('../../models');

router.get('/', async (req, res) => {
    console.log('GET request to CUSTOMER received');
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
        console.log(renderedCustomers);
        res.status(200).render('customer', {
            renderedCustomers,
        });


        // res.status(200).json(customerData);
        console.log('GET request to CUSTOMER successful');
    } catch (err) {
        res.status(400).json(err)
        console.log('GET request to CUSTOMER failed');
    }
})

router.get('/:id', async (req, res) => {
    try {
        const soleCustomerData = await Customers.findByPk(req.params.id,{
            include: [
                {model: Employees}
            ]
        })
        if (!soleCustomerData){
            res.status(500).json({message: "No customer with that ID found"})
            return
        }
        res.status(200).json(soleCustomerData);
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