const router = require('express').Router();
const { Customers, Employees } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const customerData = await Customers.findAll({
            include: [
                {model: Employees}
            ]
        })
        res.status(200).json(customerData);
    } catch (err) {
        res.status(400).json(err)
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