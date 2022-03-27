const router = require('express').Router();
const { Units, Customers } = require('../../models');
const path = require('path');

router.get('/customers.html', (req, res) => res.redirect("../customers.html"));
router.get('/issues.html', (req, res) => res.redirect("../issues.html"));
router.get('/employee.html', (req, res) => res.redirect("../employee.html"));
router.get('/storage', (req, res) => res.redirect("../storage"));


router.get('/', async (req, res) => {
    console.log('GET request to CUSTOMER received');


    try {
        const storageUnits = await Units.findAll({
            include: [
                {model: Customers}
            ]
        });
        const renderedUnits = storageUnits.map((units)=>{
            return units.get({plain: true})
        })
        console.log(renderedUnits);

        res.status(200).render('units', {
            renderedUnits,
        });
        console.log('GET request to UNIT successful');



    } catch (err) {
        res.status(400).json(err)
        console.log('GET request to UNIT failed');

    }
});

router.get('/:id', async (req, res) => {
    console.log('in the route')
    try {
        const storageUnits = await Units.findAll({
            include: [
                {model: Customers}
            ]
        });
        const renderedUnits = storageUnits.map((units)=>{
            return units.get({plain: true})
        })


        const soleStorageUnit = await Units.findByPk(req.params.id,
            {
                include: [
                    {model: Customers}
                ]
            })
        console.log(soleStorageUnit, req.params.id)
        if (!soleStorageUnit){
            res.status(500).json({message: "No Storage Unit with that ID found!"});
            return
        }

        const renderedUnit = soleStorageUnit.get({plain: true});
        res.status(200).render('unitsbyid', {
            renderedUnits,
            renderedUnit,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newStorageUnit = await Units.create(req.body)
        res.status(200).json(newStorageUnit);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) =>{
    try {
        const updatedStorageUnit = await Units.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if(!updatedStorageUnit) {
            res.status(500).json({message: "No Storage Unit with that ID found!"})
            return
        }
        res.status(200).json(updatedStorageUnit);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedStorageUnit = Units.destroy({
            where:
            {
                id: req.params.id
            }
        })
        if(!deletedStorageUnit){
            res.status(500).json({message: "No Storage Unit with that ID found!"})
            return
        }
        res.status(200).json({message: "Storage Unit removed!"})
    } catch (err) {
        res.status(400).json(err)
    }
});



module.exports = router;