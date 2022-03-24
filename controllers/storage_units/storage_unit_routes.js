const router = require('express').Router();
const { Units, Customers } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const storageUnits = await Units.findAll({
            include: [
                {model: Customers}
            ]
        });
        res.status(200).json(storageUnits);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const soleStorageUnit = await Units.findByPk(
            {
                where:
                {
                    id: req.params.id
                }
            }
        )
        if (!soleStorageUnit){
            res.status(500).json({message: "No Storage Unit with that ID found!"});
            return
        }
        res.status(200).json(soleStorageUnit);
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