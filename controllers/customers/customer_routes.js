const router = require('express').Router();
const Customer = require('../../models');

router.get('/', async (res, req) => {
    try {
        const customerData = await Customer.findAll()
        res.status(200).json(customerData);
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get('/:id', async (res, req) => {
    try {
        const soleCustomerData = await Customer.findByPk(req.params.id)
        if (!soleCustomerData){
            res.status(500).json({message: "No customer with that ID found"})
            return
        }
        res.status(200).json(soleCustomerData);
    } catch (err){
        res.status(400).json(err)
    }
});

router.post('/', async (res, req) => {
    try {
        const newCustomer = await Customer.create(req.body)
        res.status(200).json(newCustomer)
    } catch (err) {
        res.status(400).json(err)
    }
})
module.exports = router;