const router = require('express').Router();
const Storage = require('../../models');

router.get('/', async (req, res) => {
    try {
        const storageUnits = await Storage.findAll();
        res.status(200).json(storageUnits);
    } catch (err) {
        res.status(400).json(err)
    }
})




module.exports = router;